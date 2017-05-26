function drawRectangle(canvas, rectangle) {
    var x1 = rectangle[0],
        y1 = rectangle[1],
        x2 = rectangle[2],
        y2 = rectangle[3];
    return canvas.map(function (yArr, row, c) {
        return yArr.map(function (xVal, col, arr) {
            if (row == y1 || row == y2) {
                if (col == x1 || col == x2) {
                    xVal = "*";
                } else if (col > x1 & col < x2) {
                    xVal = "-";
                }
            } else if ((col == x1 || col == x2) && (row > y1 && row < y2)) {
                xVal = "|";
            }
            return xVal;
        });
    });
}
​