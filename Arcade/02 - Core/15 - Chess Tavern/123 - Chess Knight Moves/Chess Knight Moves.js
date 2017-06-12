function chessKnightMoves(cell) {
    var y = cell.charCodeAt(0),
        x = cell.charCodeAt(1),
        d = [
            [2, 1],
            [2, -1],
            [-2, 1],
            [-2, -1],
            [1, 2],
            [1, -2],
            [-1, 2],
            [-1, -2]
        ],
        count = 0;
​
    for (var i = 0; i < d.length; i++) {
        var dx = x + d[i][0];
        var dy = y + d[i][1];
        if ((dy >= 97 && dy <= 104) && (dx >= 49 && dx <= 56)) count++;
    }
​
    return count;
}
​