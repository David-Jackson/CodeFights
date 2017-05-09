function chessBoardCellColor(cell1, cell2) {
    var cols = "ABCDEFGH";
    var rows = "12345678";
    var sum1 = cols.indexOf(cell1[0]) + rows.indexOf(cell1[1]);
    var sum2 = cols.indexOf(cell2[0]) + rows.indexOf(cell2[1]);
    return sum1 % 2 == sum2 % 2;
}
​