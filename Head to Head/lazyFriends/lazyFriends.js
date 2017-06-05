function lazyFriends(houses, maxDist) {
    var nums = houses.map(function(h1) {
        return houses.reduce(function(acc, h2) {
            if (Math.abs(h2 - h1) <= maxDist) {
                return acc + 1;
            } else {
                return acc;
            }
        }, -1);
    });
    return nums;
}
​