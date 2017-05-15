function addBorder(picture) {
    var totalLength = picture[0].length + 2;
    var topBottom = new Array(totalLength);
    topBottom.fill("*");
    var res = [topBottom.join("")];
    for (var i = 0; i < picture.length; i++) {
        res.push("*" + picture[i] + "*");
    }
    res.push(topBottom.join(""));
    return res;
}
​