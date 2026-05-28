import os
import glob

html_files = glob.glob('/home/bogdan_kocic/projects/frenki-kruna/**/*.html', recursive=True)

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # We need to find the <ul class="nav-menu" id="nav-menu-list"> and wrap the first two LIs in <div class="nav-left"> and next two in <div class="nav-right">
    
    # A bit tricky with regex, let's just do string replacement
    # We will find the <ul> and the 4 <li> elements
    
    # Let's write a simple parser or just use regex
    import re
    
    # Match the ul opening tag and its contents until </ul>
    # Since we know there are exactly 4 <li>s in nav-menu-list
    
    match = re.search(r'(<ul class="nav-menu" id="nav-menu-list">)([\s\S]*?)(</ul>)', content)
    if match:
        ul_start = match.group(1)
        inner = match.group(2)
        ul_end = match.group(3)
        
        # Find all <li>...</li>
        lis = re.findall(r'<li[\s\S]*?</li>', inner)
        
        if len(lis) == 4:
            new_inner = f"""
          <div class="nav-left">
            {lis[0]}
            {lis[1]}
          </div>
          <div class="nav-right">
            {lis[2]}
            {lis[3]}
          </div>
"""
            new_content = content[:match.start()] + ul_start + new_inner + "        " + ul_end + content[match.end():]
            with open(file, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated {file}")

