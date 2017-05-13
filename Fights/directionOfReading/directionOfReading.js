function directionOfReading(numbers) {
    var res = [];
    for (var i = 0; i < numbers.length; i++) {
        var arr = new Array(numbers.length);
        arr.fill(0);
        var pos = numbers.length - 1;
        while (numbers[i] > 0) {
            var r = numbers[i] % 10;
            arr[pos] = r;
            pos--;
            numbers[i] -= r;
            numbers[i] /= 10;
        }
        res.push(arr);
    }
    var output = new Array(numbers.length);
    output.fill(0);
    for (var x = 0; x < res[0].length; x++) {
        for (var y = 0; y < res.length; y++) {
            output[x] *= 10;
            output[x] += res[y][x];
        }
    }
    return output;
}
​