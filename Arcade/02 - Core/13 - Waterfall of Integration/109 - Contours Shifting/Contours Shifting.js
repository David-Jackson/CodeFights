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
​