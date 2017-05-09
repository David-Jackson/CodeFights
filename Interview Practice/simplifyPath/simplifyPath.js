function simplifyPath(path) {
    var folders = path.split("/");
    var simple = [];
    for (var i = 0; i < folders.length; i++) {
        var f = folders[i];
        if (f == "..") {
            simple.pop();
        } else if (!(f == "" | f == ".")) {
            simple.push(f);
        }
    }
    simple = [""].concat(
        (simple.length == 0) ? [""] : simple
    );
    return simple.join("/");
}
​