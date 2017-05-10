function bishopAndPawn(bishop, pawn) {
    var by = bishop.charCodeAt(0),
        bx = bishop.charCodeAt(1),
        py = pawn.charCodeAt(0),
        px = pawn.charCodeAt(1)
    
    return Math.abs((by - py) / (bx - px)) == 1;
}
​