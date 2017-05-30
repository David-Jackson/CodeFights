import os


def generate_readme(fn_name, location, readme_file, script_file):
    with open(readme_file) as f:
        readme_txt = f.read()
    with open(script_file) as f:
        script_txt = f.read()
    with open(os.path.join(location, "README.md"), "w") as f:
        f.write("# " + fn_name)
        f.write("\n")
        f.write(readme_txt)
        f.write("\n")
        f.write("\n")
        f.write("\n")
        f.write("## My Solution")
        f.write("\n")
        f.write("```javascript")
        f.write("\n")
        f.write(script_txt)
        f.write("\n")
        f.write("```")
        f.write("\n")
        f.close()


# generate_readme("test", "D:\\Users\\usplydj\\Documents\\GitHub\\CodeFights", "Test Readme", "Test Script")


for root, dirs, files in os.walk(os.path.join("..")):
    for file in files:
        if (file.endswith(".md") and 
            os.path.isfile(os.path.join(root, file[:-2] + "js")) and 
            not os.path.isfile(os.path.join(root, "README.md"))):
             print(file)
             generate_readme(file[:-3], root, os.path.join(root, file), os.path.join(root, file[:-2] + "js"))
