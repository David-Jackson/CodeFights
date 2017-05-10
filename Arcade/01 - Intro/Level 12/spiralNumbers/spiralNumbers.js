function spiralNumbers(n) {
    var x = 0;
    var y = 0;
    var dx = [1, 0, -1, 0];
    var dy = [0, 1, 0, -1];
    var di = 0;
    var matrix = [];
    // create empty n x n matrix
    for (var i = 0; i < n; i++) {
        var line = [];
        for (var j = 0; j < n; j++) {
            line.push(0);
        }
        matrix.push(line);
    }
    var i = 1;
    while (i <= (n * n)) {
        console.log(x, y, i, dx[di], dy[di]);
        if (x >= 0 && x < n && y >= 0 && y < n && matrix[y][x] == 0) {
            matrix[y][x] = i;
        } else {
            x -= dx[di];
            y -= dy[di];
            di = (di + 1) % 4;
            i--;
        }