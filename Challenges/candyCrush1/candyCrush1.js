function candyCrush1(gameboard) {
    var curColStreak = 0;
    var curColCandy = "";
    for (var y = 0; y < gameboard.length; y++) {
        for (var x = 0; x < gameboard[y].length; x++) {
            if (
                (
                    y - 1 >= 0 &&
                    y + 1 <= gameboard.length - 1 &&
                    gameboard[y][x] == gameboard[y - 1][x] &&
                    gameboard[y][x] == gameboard[y + 1][x]
                ) ||
                (
                    x - 1 >= 0 &&
                    x + 1 <= gameboard[y].length - 1 &&
                    gameboard[y][x] == gameboard[y][x - 1] &&
                    gameboard[y][x] == gameboard[y][x + 1]
                )
            ) return true;
        }
    }
​
    return false;
}
​