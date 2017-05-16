function rounders(value) {
    var tens = 1;
    while (value >= 10) {
        var r = value % 10;
        value = Math.floor(value / 10);
        tens *= 10;
        if (r >= 5) value++;
    }
    return value * tens;
}
​