function changeOfVowelsInCycle(cycle, text) {
    text = text.split("").reverse().join("");
    var vowels = text.match(/[aeiou]/ig);
    if (vowels) {
        vowels = shiftArr(vowels, cycle);
        text = text.split("");
        var vowelIndex = 0;
        for (var i = 0; i < text.length; i++) {
            if (vowels.indexOf(text[i]) != -1) {
                text[i] = vowels[vowelIndex];
                vowelIndex++;
            }
        }
        text = text.join("");
    }
    return text;
}

function shiftArr(arr, num) {
    for (var i = 0; i < num; i++) {
        var tmp = arr.pop();
        arr = [tmp].concat(arr);
    }
    return arr;
}