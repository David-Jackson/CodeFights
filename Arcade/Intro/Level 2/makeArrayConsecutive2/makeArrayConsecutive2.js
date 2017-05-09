function makeArrayConsecutive2(statues) {
    statues.sort(function(a, b) {
        return a > b;
    });
    console.log(statues);
    var additions = 0;
    for (var i = statues[0]; i <= statues[statues.length - 1]; i++) {
        if (statues.indexOf(i) == -1) additions++;
    }
    return additions;
}
​