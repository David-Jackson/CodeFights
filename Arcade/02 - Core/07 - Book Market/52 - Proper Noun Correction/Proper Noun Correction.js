function properNounCorrection(noun) {
    noun = noun.toLowerCase();
    var arr = noun.split("");
    arr[0] = arr[0].toUpperCase();
    return arr.join("");
}
​