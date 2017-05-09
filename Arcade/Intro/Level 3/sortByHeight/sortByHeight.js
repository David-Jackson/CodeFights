function sortByHeight(a) {
    var trees = [],
        noMove = [],
        res = [];
    for (var i = 0; i < a.length; i++) {
        if (a[i] == -1) {
            noMove.push(i);
        } else {
            trees.push(a[i]);
        }
    }
    trees.sort(function (a,b) {
        return a < b;
    });
    for (var i = 0; i < a.length; i++) {
        if (noMove.indexOf(i) != -1) {
            res.push(-1);
        } else {
            res.push(trees.pop());
        }
    }
    return res;
}
​