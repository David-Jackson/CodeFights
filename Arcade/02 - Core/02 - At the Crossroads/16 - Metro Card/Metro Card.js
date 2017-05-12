function metroCard(lastNumberOfDays) {
    var arr = [];
    arr[28] = [31];
    arr[30] = [31];
    arr[31] = [28, 30, 31];
    return arr[lastNumberOfDays];
}
​