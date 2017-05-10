function sudoku(grid) {
    var maxArr = function(arr) {
        var max = 0;
        for (var i = 0; i < arr.length; i++) {
            if (max < arr[i]) max = arr[i];
        }
        return max;
    }
    
    var hasOneThroughNine = function(arr) {
        var res = [0,0,0,0,0,0,0,0,0];
        for (var i = 0; i < arr.length; i++) {
            var x = parseInt(arr[i]);
            if (x != NaN) res[x - 1] += 1;
        }
        return maxArr(res) == 1
    }
    
    
    // check rows
    for (var y = 0; y < grid.length; y++) {
        if (!hasOneThroughNine(grid[y])) return false;
    }
    
    // check columns
    for (var x = 0; x < 9; x++) {