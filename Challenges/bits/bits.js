function bits(numbers) {
    for (var i = 0; i < numbers.length; i++) {
        var b = numbers[i].toString(2).split("");
        var zeroI = findFirstZero(b);
        var oneI = findLastOne(b);
        if (zeroI != -1 && oneI != -1) {
            b = swap(b, zeroI, oneI);
        }
        numbers[i] = Math.max(numbers[i], parseInt(b.join(""), 2));
    }
    return numbers;
}
​
function findFirstZero(arr) {
    return arr.indexOf("0");
}
​
function findLastOne(arr) {
    for (var i = arr.length - 1; i >= 0; i--) {
        if (arr[i] == "1") {
            return i;
        }
    }
    return -1;
}
​
function swap(arr, a, b) {