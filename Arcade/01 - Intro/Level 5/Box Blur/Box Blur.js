function boxBlur(image) {
    var res = [];
    for (var y = 0; y < image.length - 2; y++) {
        var line = [];
        for (var x = 0; x < image[y].length - 2; x++) {
            var sum = 0;
            var count = 0;
            for (var a = y; a < y + 3; a++) {
                for (var b = x; b < x + 3; b++) {
                    sum += image[a][b];
                    count++;
                }
            }
            line.push(Math.floor(sum / count));
        }
        res.push(line);
    }
    return res;
}
​