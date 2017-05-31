function gravitation(rows) {
    var firstStone = new Array(rows[0].length).fill(undefined);
    var spacesAfter = new Array(rows[0].length).fill(0);
    
    for (var y = 0; y < rows.length; y++) {
        for (var x = 0; x < rows[y].length; x++) {
            var spot = rows[y][x];
            console.log(spot);
            if (spot == "#") {
                if (firstStone[x] == undefined) {
                    firstStone[x] = y;
                }
            } else {
                if (firstStone[x] != undefined) {
                    spacesAfter[x] += 1;
                }
            }
        }
    }
    
    var res = [];
    var min = spacesAfter.reduce(function(acc, val, index) {
        if (val == acc) {
            res.push(index);
        } else if (val < acc) {
            res = [index];
            return val;
        }
        return acc;
    }, Infinity);
    return res;
}
​