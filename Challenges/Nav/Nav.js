function Nav(d) {
    var x = y = z = 0;
    for (var i in d) {
        switch (d[i]) {
            case '^':
                x--;break;
            case 'v':
                x++;break;
            case '<':
                y--;break;
            case '>':
                y++;break;
            case '-':
                z--;break;
            case '+':
                z++;break;
        }
    }
    return [x, y, z];
}
​