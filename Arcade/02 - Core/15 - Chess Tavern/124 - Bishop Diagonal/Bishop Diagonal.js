function bishopDiagonal(bishop1, bishop2) {
    var res = [bishop1, bishop2].sort(),
        bishop1 = res[0],
        bishop2 = res[1],
        b1y = bishop1.charCodeAt(0),
        b2y = bishop2.charCodeAt(0),
        b1x = bishop1.charCodeAt(1),
        b2x = bishop2.charCodeAt(1),
        slope = (b1y - b2y) / (b1x - b2x);
    if (Math.abs(slope) == 1) {
        while (b1x > 49 && b1x < 56 && b1y > 97 && b1y < 104) {
            b1x += -slope;
            b1y -= 1;
        }
        while (b2x > 49 && b2x < 56 && b2y > 97 && b2y < 104) {
            b2x += slope;
            b2y += 1;
        }
        res = [
            String.fromCharCode(b1y) + String.fromCharCode(b1x),
            String.fromCharCode(b2y) + String.fromCharCode(b2x)
        ]
    }
    return res;
}
​