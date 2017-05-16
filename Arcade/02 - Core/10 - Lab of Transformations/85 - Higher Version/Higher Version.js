function higherVersion(ver1, ver2) {
    a1 = ver1.split(".");
    a2 = ver2.split(".");
    for (var i = 0; i < a1.length; i++) {
        var a = parseInt(a1[i]);
        var b = parseInt(a2[i]);
        if (a == b && i < a1.length - 1) continue;
        return !(a <= b);
    }
    return true;
}
​