function stolenLunch(note) {
    var arr = note.split("");
    for (var i in arr) {
        arr[i] = swap(arr[i])
    }
    return arr.join("");
}
​
function swap(s) {
    var c = s.charCodeAt(0);
    if (48 <= c && c <= 57) {
        c += 49;
    } else if (97 <= c && c <= 106) {
        c -= 49;
    }
    return String.fromCharCode(c);
}
​