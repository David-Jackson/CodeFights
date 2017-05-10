function growingPlant(upSpeed, downSpeed, desiredHeight) {
    var h = 0;
    var d = 0;
    while (h < desiredHeight) {
        d++;
        h += upSpeed;
        if (h >= desiredHeight) break;
        h -= downSpeed;
    }
    return d;
}
​