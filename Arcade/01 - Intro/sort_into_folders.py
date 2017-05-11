import glob
import os


folder = "Level 12\\"


for f in glob.glob(folder + "*"):
    name = ".".join(os.path.basename(f).split(".")[:-1])
    print name
    if not os.path.exists(folder + name):
        os.makedirs(folder + name)
    os.rename(f, folder + name + "\\" + os.path.basename(f))