function contoursShifting(matrix) {
    var layers = [], // contours
        curLayer = [],
        count = 0,
        limit = matrix.length * matrix[0].length,
        x = 0,
        y = 0,
        dx = [1, 0, -1, 0],
        dy = [0, 1, 0, -1],
        di = 0;
    
    // fill each contour
    while (count < limit) {
        count++;
        curLayer.push(matrix[y][x]);
        matrix[y][x] = NaN;
        x += dx[di];
        y += dy[di];
        if (y >= matrix.length || isNaN(matrix[y][x])) {
            x -= dx[di];
            y -= dy[di];
            di = (di + 1) % dx.length;
            x += dx[di];
            y += dy[di];
            if (di == 0) {
                layers.push(curLayer);
                curLayer = [];
            }
        }
    }
    
    if (curLayer.length != 0) layers.push(curLayer);
    
    // shift each contour
    layers = layers.map(function(val, index, arr) {
        if (index % 2 == 0) {
            var tmp = val.pop();
            val = [tmp].concat(val);
        } else {
            var tmp = val.splice(0, 1);
            val.push(tmp[0]);
        }
        return val.reverse(); // reverse contour so items can be popped out
    }).reverse();
    
    // put the contours back
    curLayer = layers.pop();
    count = 0;
    x = 0;
    y = 0;
    di = 0;
    while (count < limit) {
        count++;
        matrix[y][x] = curLayer.pop();
        x += dx[di];
        y += dy[di];
        if (y >= matrix.length ||
            x >= matrix[0].length ||
            y < 0 || x < 0 ||
            !isNaN(matrix[y][x])) {
            x -= dx[di];
            y -= dy[di];
            di = (di + 1) % dx.length;
            x += dx[di];
            y += dy[di];
            if (di == 0) {
                curLayer = layers.pop();
            }
        }
    }
    return matrix;
}