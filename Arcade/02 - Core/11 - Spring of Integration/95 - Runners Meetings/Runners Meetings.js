function runnersMeetings(startPosition, speed) {
    function groupAndReturnMax(arr) {
        var max = -2; // -2 because we'll add one at the end
        var maxItem = "";
        var obj = {};
        for (var i in arr) {
            if (!obj[arr[i]]) obj[arr[i]] = 0;
            obj[arr[i]]++;
            if (obj[arr[i]] > max) {
                max = obj[arr[i]];
                maxItem = arr[i];
            }
        }
        return max;
    }
    
    function calcIntersect(v1, x1, v2, x2) {
        return (x2 - x1) / (v1 - v2);
    }
    
    var max = -2; // -2 because we'll add one at the end
    
    for (var i = 0; i < startPosition.length; i++) {
        var intersectionTimes = [];
        for (var j = 0; j < startPosition.length; j++) {
            if (i == j) continue;
            var intersectionTime = calcIntersect(speed[i], startPosition[i], speed[j], startPosition[j]);
            if (intersectionTime >= 0 && isFinite(intersectionTime)) {
                intersectionTimes.push(intersectionTime);
            }
        }
        max = Math.max(max, groupAndReturnMax(intersectionTimes));
    }
    
    return max + 1;
}
​