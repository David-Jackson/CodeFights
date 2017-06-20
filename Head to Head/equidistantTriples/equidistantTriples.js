function equidistantTriples(coordinates) {
  var ans = 0;
  for (var i = 1; i < coordinates.length - 1; i++) {
    var left = i - 1;
    var right = i + 1;
    while (left >= 0 && right < coordinates.length) {
      var distL = coordinates[i] - coordinates[left];
      var distR = coordinates[right] - coordinates[i];
      if (distL === distR) {
        ans++;
        left--;
        right++;
      } else if (distL < distR) {
        left--;
      } else {
        right++;
      }
    }
  }
​
  return ans;
}
​