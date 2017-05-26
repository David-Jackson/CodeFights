function beautifulText(inputString, l, r) {
    for (var i = l; i <= r; i++) {
        if ((inputString.length + 1) % (i + 1) == 0) {
            valid = true;
            for (var j = i; j < inputString.length; j = j + i + 1) {
                if (inputString.charAt(j) != ' ') {
                    valid = false;
                    break;
                }
            }
            if (valid) return true;
        }
    }
    return false;
}