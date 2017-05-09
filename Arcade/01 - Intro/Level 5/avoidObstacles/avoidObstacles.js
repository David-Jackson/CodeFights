function avoidObstacles(inputArray) {
    inputArray.sort(function (a, b) {
        return a > b;
    });
    var jump = 1;
    while (true) {
        var success = true;
        for (var i = 0; 
             i <= inputArray[inputArray.length - 1]; 
             i = i + jump) {
            if (inputArray.indexOf(i) != -1) {
                success = false;
                break;
            }
        }
        if (success) {
            break;
        } else {
            jump++;
        }
    }
    return jump;
}
​