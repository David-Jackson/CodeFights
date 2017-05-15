function arrayPacking(a) {
    for (var i = 0; i < a.length; i++) {
        a[i] = a[i].toString(2);
        while (a[i].length < 8) {
            a[i] = "0" + a[i];
        }
    }
    console.log(a)
    return parseInt(a.reverse().join(""), 2);
}
​