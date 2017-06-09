function makeArrayConsecutive2(sequence) {
    sequence = sequence.sort(function(a,b){return a - b});
    var holes = [];
    for (var i = sequence[0]; i < sequence[sequence.length - 1]; i++) {
        if (sequence.indexOf(i) == -1) {
            holes.push(i);
        } 
    }
    return holes.length;
}
​