function addBorder(picture) {
    var frame = [];
    var top = "**";
    for (var i = 0; i < picture[0].length; i++) {
        top += "*";
    }
    frame.push(top);
    for (var i = 0; i < picture.length; i++) {
        frame.push("*" + picture[i] + "*");
    }
    frame.push(top);
    return frame;
}
​