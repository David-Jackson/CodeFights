    var possibleMoves = [
        [2, 1],
        [2, -1],
        [-2, 1],
        [-2, -1],
        [1, 2],
        [1, -2],
        [-1, 2],
        [-1, -2]
    ];
    var startingPos = [
        toPos('b1'),
        toPos('g1'),
        toPos('b8'),
        toPos('g8')
    ];
    var currentPos = p.split(";").map(n => toPos(n));
    var totalMoves = 0;
    for (var i in startingPos) {
        var desired = currentPos[i];
        var pos = startingPos[i];
        var moves = 0;
        var spots = [pos];
        while (spots.findIndex(function(val) {
            return val.x == desired.x && val.y == desired.y
        }) == -1) {
            moves++;
            for (var j = spots.length - 1; j >= 0; j--) {
                for (var k in possibleMoves) {
                    var next = {
                        x: spots[j].x + possibleMoves[k][0],
                        y: spots[j].y + possibleMoves[k][1]
                    }
                    if (validPos(next)) {
                        spots.push(next);
                    }
                }
            }
        }
        totalMoves += moves;
    }
    return totalMoves % 2 == 0;
}
​