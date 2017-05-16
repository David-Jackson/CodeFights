function additionWithoutCarrying(param1, param2) {
    var sum = 0;
    var tens = 1;
    while (param1 > 0 || param2 > 0) {
        n1 = param1 % 10;
        n2 = param2 % 10;
        param1 = Math.floor(param1 / 10);
        param2 = Math.floor(param2 / 10);
        sum += tens * ((n1 + n2) % 10);
        tens *= 10;
    }
    return sum;
}
​