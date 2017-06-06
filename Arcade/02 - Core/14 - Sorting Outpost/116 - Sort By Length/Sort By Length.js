function sortByLength(inputArray) {
    return inputArray.sort(function(a, b) {
        if (a.length == b.length) return -1;
        return a.length > b.length;
    });
}
​