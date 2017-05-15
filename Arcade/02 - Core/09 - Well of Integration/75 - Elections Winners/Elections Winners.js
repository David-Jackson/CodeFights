function electionsWinners(votes, k) {
    var count = 0;
    var leader = Math.max(...votes);
    for (var i = 0; i < votes.length; i++) {
        if (votes[i] + k > leader) {
            count++;
        }
    }
    if (count == 0 && votes.filter(n => n == leader).length == 1) {
        count++;
    }
    return count;
}
​