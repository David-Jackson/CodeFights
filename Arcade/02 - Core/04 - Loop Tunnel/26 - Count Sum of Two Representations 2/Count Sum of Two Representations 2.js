function countSumOfTwoRepresentations2(n, l, r) {
    var lower = Math.floor(n / 2);
    var upper = Math.ceil(n / 2);
    var lowerEnd = l;
    var upperEnd = r;
    var ways = 0;
    
    while (lower >= lowerEnd && upper <= upperEnd) {
        if (lower + upper == n) {
            ways++;
        }
        lower--;
        upper++;
    }
    
    return ways;
    
}
​