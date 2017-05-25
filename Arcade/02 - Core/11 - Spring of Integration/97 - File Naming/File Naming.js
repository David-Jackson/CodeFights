function fileNaming(names) {
    for (var i in names) {
        var name = names[i];
        var index = names.indexOf(name);
        if (index != i) {
            // add file number to it
            var fileNum = 0;
            do {
                fileNum++;
                var newName = name + "(" + fileNum + ")";
                index = names.indexOf(newName);
                if (index == -1) break;
            } while (index < i);
            names[i] = newName;
        }
    }
    return names;
}
​