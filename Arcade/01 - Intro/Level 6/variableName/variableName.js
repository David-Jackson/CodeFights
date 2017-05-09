function variableName(name) {
    var limits = [
        [48, 57],
        [65, 90],
        [97, 122],
        [95, 95]
    ];
    for (var i = 0; i < name.length; i++) {
        var code = name.charCodeAt(i);
        if (i == 0 &&
            code <= limits[0][1] &&
            code >= limits[0][0]) return false;
        var good = false; 
        for (var j = 0; j < limits.length; j++) {
            if (code >= limits[j][0] && code <= limits[j][1]) {
                good = true;
                break;
            }
        }
        if (!good) return false;
    }
    return true;
}
​