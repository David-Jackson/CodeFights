function lineUp(commands) {
    var count = 0;
    var pos = 0;
    for (var i = 0; i < commands.length; i++) {
        var c = commands[i];
        if (c == "L") {
            pos--;
        } else if (c == "R") {
            pos++;
        }
        else if (c == "A") {
            pos++;
            pos++;
        }
        pos %= 4;
        if (pos % 2 == 0) count++;
    }
    return count
}
​