import os



for root, dirs, files in os.walk(os.path.join("..", "Head to Head")):
    for file in files:
        if file.endswith(".md") and file != "README.md":
             name = file.split(".")[0]
             parent = os.path.split(root)[-1]
             directory = os.path.join(root, name)
             if name != parent and os.path.isfile(os.path.join(root, name + ".js")):
                 print(name)
                 if not os.path.exists(directory):
                     os.makedirs(directory)
                 os.rename(os.path.join(root, file), os.path.join(directory, file))
                 os.rename(os.path.join(root, name + ".js"), os.path.join(directory, name + ".js"))
