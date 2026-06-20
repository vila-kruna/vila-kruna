import { type NextRequest } from 'next/server';
import bcrypt from 'bcryptjs';

// Simple in-memory rate limiter to prevent brute force
// On Vercel serverless, each cold start resets this — which is acceptable
// because the rate limit still applies within warm function instances.
const attempts = new Map<string, { count: number; resetAt: number }>();
const MAX_ATTEMPTS = 5;
const WINDOW_MS = 60_000; // 1 minute

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = attempts.get(ip);

  if (!entry || now > entry.resetAt) {
    attempts.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  entry.count += 1;
  return entry.count > MAX_ATTEMPTS;
}

export async function POST(request: NextRequest) {
  // Rate limiting by IP
  const forwarded = request.headers.get('x-forwarded-for');
  const ip = forwarded?.split(',')[0]?.trim() || 'unknown';

  if (isRateLimited(ip)) {
    return Response.json(
      { error: 'Too many attempts. Try again in a minute.' },
      { status: 429 }
    );
  }

  // Validate env vars exist — fail closed if missing
  const expectedUsername = process.env.ADMIN_USERNAME;
  const expectedPasswordHash = process.env.ADMIN_PASSWORD_HASH;
  const githubPat = process.env.GITHUB_PAT;

  if (!expectedUsername || !expectedPasswordHash || !githubPat) {
    // TODO(security): In production, consider alerting on missing env vars
    return Response.json(
      { error: 'Server configuration error.' },
      { status: 500 }
    );
  }

  // Parse and validate request body
  let body: { username?: string; password?: string };
  try {
    body = await request.json();
  } catch {
    return Response.json(
      { error: 'Invalid request body.' },
      { status: 400 }
    );
  }

  const { username, password } = body;

  if (
    typeof username !== 'string' || username.length === 0 || username.length > 128 ||
    typeof password !== 'string' || password.length === 0 || password.length > 128
  ) {
    return Response.json(
      { error: 'Invalid credentials format.' },
      { status: 400 }
    );
  }

  // Constant-time comparison for username via bcrypt (prevents timing attacks)
  // For the single-user case, we compare username directly but always run bcrypt
  // to maintain constant response time regardless of which field fails
  const usernameMatch = username === expectedUsername;
  const passwordMatch = await bcrypt.compare(password, expectedPasswordHash);

  if (!usernameMatch || !passwordMatch) {
    // Generic error — don't reveal which field was wrong
    return Response.json(
      { error: 'Invalid username or password.' },
      { status: 401 }
    );
  }

  // Authentication successful — return the PAT
  // The PAT is only sent over HTTPS (enforced by Vercel) and only after
  // successful server-side credential validation
  return Response.json(
    { token: githubPat },
    {
      status: 200,
      headers: {
        'Cache-Control': 'no-store',
        'X-Content-Type-Options': 'nosniff',
      },
    }
  );
}

// Only allow POST method
export async function GET() {
  return Response.json(
    { error: 'Method not allowed.' },
    { status: 405 }
  );
}
