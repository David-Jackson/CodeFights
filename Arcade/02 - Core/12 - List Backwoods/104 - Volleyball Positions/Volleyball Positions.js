function volleyballPositions(formation, k) {
    
    var newFormation = formation.slice();
    
    var pos = [
        [0, 3, 0],
        [4, 0, 2],
        [0, 6, 0],
        [5, 0, 1]
    ];
    
    var inlinePos = [
        [3, 2],
        [1, 2],
        [0, 1],
        [1, 0],
        [3, 0],
        [2, 1]
    ];
    
    var list = inlinePos.map(n => formation[n[0]][n[1]]);
    
    for (var i = 0; i < k % 6; i++) {
        var tmp = list.pop();
        list = [tmp].concat(list);
    }
    
    for (var i = 0; i < list.length; i++) {
        var y = inlinePos[i][0];
        var x = inlinePos[i][1];
        formation[y][x] = list[i];
    }
    
    return formation;
}
​