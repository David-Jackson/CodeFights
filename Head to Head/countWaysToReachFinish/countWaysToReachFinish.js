function countWaysToReachFinish(cells) {
​
  var n = cells.length;
  var MAX_MASK = 1 << n;
​
  // dp[m][k] - the number of ways to reach the k-th cell using jumps
  // that are marked in the mask m.
  var dp = [];
  var was = [];
  for (var m = 0; m < MAX_MASK; m++) {
    dp.push([]);
    was.push([]);
    for (var k = 0; k < n; k++) {
      dp[m].push(0);
      was[m].push(false);
    }
  }
  dp[0][0] = 1;
  was[0][0] = true;
​
  var get = function(m, k) {
    if (k < 0 || k >= n || !cells[k]) {
      return 0;
    }
    if (was[m][k]) {