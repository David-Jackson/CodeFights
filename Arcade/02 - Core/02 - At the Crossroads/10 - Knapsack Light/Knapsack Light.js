function knapsackLight(value1, weight1, value2, weight2, maxW) {
    if (value1 < value2) {
        var tempVal = value1;
        var tempWgt = weight1;
        value1 = value2;
        weight1 = weight2;
        value2 = tempVal;
        weight2 = tempWgt;
    }
    if (weight1 + weight2 <= maxW) {
        return value1 + value2;
    }
    if (weight1 <= maxW) {
        return value1;
    }
    if (weight2 <= maxW) {
        return value2;
    }
    return 0;
}
​