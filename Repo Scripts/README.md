# Repo Scripts
These are the scripts used to maintain and add to this repository.

## Process
1. `downloadFiles.js` - with a CodeFights description and solution open, run the `saveProblem()` function to download a .js and .md file for the problem.
2. `save_md_images.py` - this will download any image links in the .md files to a problem's folder under an images folder
3. `change_md_image_links.py` - this will change all of the references to the images that were downloaded previously to the local image
4. `update_readme.py` - this will generate a `README.md` file for each problem that doesn't yet have one with the problem's description and solution in one file.