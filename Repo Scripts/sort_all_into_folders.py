import os



for root, dirs, files in os.walk(os.path.join("..")):
    for file in files:
        if file.endswith(".md"):
             print(file, root)
             break
