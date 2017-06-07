# videoPart
﻿You have been watching a video for some time. Knowing the total video duration find out what portion of the video you have already watched.

**Example**

For `part = "02:20:00"` and `total = "07:00:00"`, the output should be
`videoPart(part, total) = [1, 3]`.

You have watched `1 / 3` of the whole video.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] string part**

    A string of the following format `"hh:mm:ss"` representing the time you have been watching the video.

*   **[input] string total**

    A string of the following format `"hh:mm:ss"` representing the total video duration.

*   **[output] array.integer**

    An array of the following format `[a, b]` (where `a / b` is [a reduced fraction](keyword://reduced-fraction)).


## My Solution
```javascript
﻿function videoPart(part, total) {
​
  var getSeconds = function(time) {
    var h = parseInt(time.substring(0, 2)),
        m = parseInt(time.substring(3, 5)),
        s = parseInt(time.substring(6, 8));
    return h * 60 * 60 + m * 60 + s;
  }
​
  var gcd = function(a, b) {
    while (a > 0) {
      var tmp = a;
      a = b % a;
      b = tmp;
    }
    return b;
  }
​
  var partTime =  getSeconds(part) ;
  var totalTime = getSeconds(total);
  var divisor = gcd(partTime, totalTime);
  return [partTime / divisor, totalTime / divisor];
}
​
```
