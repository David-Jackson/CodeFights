function cards(n) {
    var count = 0,
        suits = ['C', 'D', 'H', 'S'],
        cards = [2, 3, 4, 5, 6, 7, 8, 9, 0, 'J', 'Q', 'K', 'A'];
    for (var i in suits) {
        for (var j in cards) {
            if (count == n) return cards[j] + suits[i];
            count++;
        }
    }
}
​