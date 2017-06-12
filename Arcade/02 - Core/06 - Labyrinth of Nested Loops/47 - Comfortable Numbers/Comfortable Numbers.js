function comfortableNumbers(L, R) {
    if (L == R) return 0;
    var a = L;
    var b = a + 1;
    var sumA = 0;
    var pairs = 0;
    while (a < R) {
        var aStr = a.toString();
        var aX = 0;
        while (aX < aStr.length) {
            sumA = sumA + parseInt(aStr[aX]+"");
            aX = aX + 1;
        }
        while (b <= R) {
            var bStr = b.toString();
            var bX = 0, sumB = 0;
 
            while (bX < bStr.length) {
                sumB = sumB + parseInt(bStr[bX]+"");
                bX = bX + 1;
            }
 
            if((b >= a - sumA) && (b <= a + sumA)&&
              (a >= b - sumB) && (a <= b + sumB)) {
                pairs = pairs + 1;
            }
 
            b = b + 1;
        }
 
        a = a + 1;
        b = a + 1;
        sumA = 0;
    }
    return pairs;
}
​