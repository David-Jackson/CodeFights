function chessQueen(q) {
    var coordToXY = function(boardCoordinate) {
        return [
            boardCoordinate.charCodeAt(0),
            boardCoordinate.charCodeAt(1)
        ];
    };
    var xyToCoord = function(xyCoordinate) {
        return String.fromCharCode(xyCoordinate[0]) + 
            String.fromCharCode(xyCoordinate[1]);
    };
    var pos = coordToXY(q);
    var res = [];
    for (var x = 97; x <= 104; x++) {
        for (var y = 49; y <= 56; y++) {
            var slope = (y - pos[1]) / (x - pos[0]);
            if (
                !isNaN(slope) &&
                isFinite(slope) &&
                Math.abs(slope) != 1 &&
                slope != 0
            ) {
                res.push(xyToCoord([x, y]));
            }
        }
    }
    return res;
}