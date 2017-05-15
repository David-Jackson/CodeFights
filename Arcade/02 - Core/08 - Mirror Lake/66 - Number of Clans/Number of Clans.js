function numberOfClans(divisors, k) {
    var arr = [1];
    for (var i = 2; i <= k; i++) {
        var shouldAdd = true;
        for (var j = 0; j < arr.length; j++) {
            if (areFriends(i, arr[j], divisors)) {
                shouldAdd = false;
                break;
            }
        }
        if (shouldAdd) {
            arr.push(i);
        }
    }
    return arr.length;
}
​
function areFriends(a, b, arr) {
    for (var i = 0; i < arr.length; i++) {
        if (!(a % arr[i] == 0 && b % arr[i] == 0) && !(a % arr[i] != 0 && b % arr[i] != 0)) return false;
    }
    return true;
}