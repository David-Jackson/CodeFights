function isUnstablePair(filename1, filename2) {
    var a1 = [filename1, filename2];
    var a2 = [filename1.toLowerCase(), filename2.toLowerCase()];
    console.log(a1, a2);
    a1.sort();
    a2.sort();
    console.log(a1, a2);
    return a1[0] == a2[0];
}
​