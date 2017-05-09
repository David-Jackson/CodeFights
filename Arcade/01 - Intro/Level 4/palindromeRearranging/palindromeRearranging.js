function palindromeRearranging(inputString) {
    var letters = [];
    var occurances = [];
    for (var i = 0; i < inputString.length; i++) {
        var index = letters.indexOf(inputString[i]);
        if (index == -1) {
            letters.push(inputString[i]);
            occurances.push(1);
        } else {
            occurances[index] += 1;
        }
    }
    var odd = false;
    for (var i = 0; i < occurances.length; i++) {
        if (occurances[i] % 2 == 1) {
            if (odd) {
                return false;
            }
            odd = true;
        }
    }
    return true;
}
​