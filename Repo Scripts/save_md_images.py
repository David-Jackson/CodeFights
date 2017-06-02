import os
import re
import urllib.request


def save_all_images_from_markdown(filename):
    with open(filename) as f:
        m = re.findall('!\[\]\(.+\)', f.read())
        if m:
            for res in m:
                url = res[4:-1].split("?")[0]
                directory = os.path.join(os.path.dirname(filename), "images")
                name = os.path.join(directory, os.path.basename(url))
                if not os.path.exists(directory):
                    os.makedirs(directory)
                if not os.path.isfile(name):
                    urllib.request.urlretrieve(url, name)
                    print(url)



for root, dirs, files in os.walk(os.path.join("..")):
    for file in files:
        if file.endswith(".md"):
             print(root)
             save_all_images_from_markdown(os.path.join(root, file))
