function fileNaming(names) {
    files = [];
    for (var i = 0; i < names.length; i++) {
        if (files.indexOf(names[i]) == -1) {
            files.push(names[i]);
        } else {
            var num = 1;
            while (files.indexOf(names[i] + "(" + num + ")") != -1) {
                num++;
            }
            files.push(names[i] + "(" + num + ")")
        }
    }
    return files;
}
​