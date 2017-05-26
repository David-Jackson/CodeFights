function starRotation(matrix, width, center, t) {
    t = t % 8;
    if (t == 0) return matrix;
    var yMin = center[0] - ((width - 1) / 2),
        yMax = center[0] + ((width - 1) / 2),
        xMin = center[1] - ((width - 1) / 2),
        xMax = center[1] + ((width - 1) / 2);
    var newMatrix = matrix.map(function (rowArr, y) {
        return rowArr.map(function (val, x) {
            if (y < yMin || y > yMax || x < xMin || x > xMax) return val;
            var slope = (y - center[0]) / (x - center[1]);
            if (isNaN(slope)) {
                // this is the center point, just return the val
            } if (!isFinite(slope)) {
                return matrix[y][x - (center[0] - y)];
            } else if (slope == 0) {
                return matrix[y + (center[1] - x)][x];
            } else if(slope == 1) {
                return matrix[y + (center[1] - x)][x];
            } else if (slope == -1) {
                return matrix[y][x + (y - center[0])];
            }
            return val;
        });
    });
    return (t == 1) ? newMatrix : starRotation(newMatrix, width, center, t - 1);
}
​