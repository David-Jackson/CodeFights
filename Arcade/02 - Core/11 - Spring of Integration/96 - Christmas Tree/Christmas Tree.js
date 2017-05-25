function christmasTree(levelNum, levelHeight) {
    var tree = [
        "*",
        "*",
        "***",
    ];
    for (var i = 0; i < levelNum; i++) {
        for (var j = 0; j < levelHeight; j++) {
            tree.push(
                new Array(
                    5 + (2 * i) + (2 * j)
                ).fill("*").join("")
            );
        }
    }
    
    // add base
    var base = new Array(
        levelHeight + ((levelHeight % 2 == 0) ? 1 : 0)
    ).fill("*").join("");
    
    for (var i = 0; i < levelNum; i++) {
        tree.push(base);
    }
    
    console.log(tree);
    
    // pad each level
    var longest = tree.reduce(function(acc, val) {
        return Math.max(val.length, acc);
    }, 0);
    
    tree = tree.map(function(val) {
        var padding = new Array(Math.floor((longest - val.length) / 2))
                        .fill(" ").join("");
        return padding + val;
    });
    
    return tree;
}
​