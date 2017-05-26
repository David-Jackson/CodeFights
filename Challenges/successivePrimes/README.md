# successivePrimes
﻿You are given an array `primes`, which consists of all but one prime numbers from some range. Your task is to find the missing number and return it.

It is guaranteed that the answer always exists.

**Example**

For `primes = [11, 3, 7]`, the output should be
`successivePrimes(primes) = 5`.

The `primes` array consists of prime integers in the range `[3, 11]`. The prime `5` is missing from the array, so `5` is the answer.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] array.integer primes**

    A sequence of different prime integers.

    _Guaranteed constraints:_
    `2 < primes.length ≤ 10<sup>5</sup>`,
    `2 ≤ primes[i] ≤ 10<sup>6</sup>`.

*   **[output] integer**

    The single missing prime number from `primes`.


## My Solution
```javascript
function successivePrimes(primes) {
    var arr = analyzeArray(primes);
    var allPrimes = primeSieve(arr.max);
    for (var i = arr.min; i < arr.max; i++) {
        if (allPrimes[i] && arr.values.indexOf(i) == -1) {
            return i;
        }
    }
}

function analyzeArray(arr) {
    var obj = {
        min: Infinity,
        max: 0,
        values: []
    };
    for (var i = 0; i < arr.length; i++) {
        obj.values.push(arr[i]);
        obj.min = Math.min(arr[i], obj.min);
        obj.max = Math.max(arr[i], obj.max);
    }
    return obj;
}

function primeSieve(n) {
    var l = new Array(n + 1);
    l.fill(true);
    
    for (var i = 2; i <= Math.pow(n, 0.5); i++) {
        if (l[i]) {
            for (var j = 0; j <= n; j = j + i) {
                l[j] = false;
            }
        }
    }
    
    return l;
}
```
