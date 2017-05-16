function adaNumber(line) {
    if (
        line.charAt(0) == "_" || 
        line.charAt(line.length - 1) == "_"
    ) return false;
    line = line.replace(/_/g, "");
    var parts = line.split("#");
    console.log(parts);
    if (parts.length == 1) {
        // needs to be base ten
        return parts[0].match(/[0-9]/g).length == parts[0].length;
    } else if (parts.length == 3) {
        // can be different base
        if (parts[0] == "" || parts[1] == "" | parts[2] != "") return false;
        var base = parseInt(parts[0]);
        if (base < 2 || base > 16) return false;
        for (var i = 0; i < parts[1].length; i++) {
            if (isNaN(parseInt(parts[1][i], base))) return false;
        }
        return true;
    }
    return false;
}
​