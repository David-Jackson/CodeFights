function singkatan(s1, s2) {
    var maxOverlap = 0;
    for (var i = 0; i < s2.length; i++) {
        var index = s1.indexOf(s2.substring(0, i + 1), s1.length - i - 1);
        maxOverlap = Math.max(
            maxOverlap,
            s1.length - ((index == -1) ? s1.length : index)
        );
    }
    return s1.substring(0, s1.length - maxOverlap) + s2;
}
​