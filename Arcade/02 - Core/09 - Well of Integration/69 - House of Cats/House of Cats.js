function houseOfCats(legs) {
    var maxCats = Math.floor(legs / 4);
    var peoplePossibilities = [];
    for (var i = maxCats; i >= 0; i--) {
        peoplePossibilities.push(
            (legs - (4 * i)) / 2
        );
    }
    return peoplePossibilities;
}
​