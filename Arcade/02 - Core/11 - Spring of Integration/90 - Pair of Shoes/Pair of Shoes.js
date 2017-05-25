function pairOfShoes(shoes) {
    while (shoes.length > 0) {
        var shoe = shoes.pop();
        var match = shoes.findIndex(function(element) {
            return element[0] != shoe[0] && element[1] == shoe[1];
        });
        if (match == -1) {
            shoes.push(shoe);
            break;
        } else {
            shoes.splice(match, 1);
        }
    }
    return shoes.length == 0;
}
​