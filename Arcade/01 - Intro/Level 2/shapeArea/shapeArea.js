function shapeArea(n) {
    var area = 0;
    var size = 1;
    for (var i = 1; i < n; i++) {
        area += (2 * size);
        size += 2;
    }
    area += size;
    return area;
}
​