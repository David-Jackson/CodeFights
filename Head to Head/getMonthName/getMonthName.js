function getMonthName(mo) {
    var month = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ");
    return (mo > 0 && mo <= 12) ? month[mo - 1] : 'invalid month';
}
​