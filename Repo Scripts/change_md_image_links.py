import os
import re

def image_link_replace(matchObj):
    print(matchObj.group(0))
    url = matchObj.group(0)[4:-1].split("?")[0]
    name = "![](" + "images/" + os.path.basename(url) + ")"
    return name

def change_all_image_links(filename):
    with open(filename, "r+") as f:
        file_text = f.read()
        file_text = re.sub('!\[\]\(.+\)', image_link_replace, file_text)
        f.seek(0)
        f.write(file_text)
        f.truncate()


for root, dirs, files in os.walk(os.path.join("..")):
    for file in files:
        if file.endswith(".md"):
             change_all_image_links(os.path.join(root, file))
