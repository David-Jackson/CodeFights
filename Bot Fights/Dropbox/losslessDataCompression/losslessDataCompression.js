function losslessDataCompression(inputString, width) {
    var res = "";
    for(var i = 0; i < inputString.length; i++){
        var char = inputString.charAt(i)
        var window = inputString.substring(i - width, i);
        var pos = -1;
        var length = 0;
        for(var j = 0; j < width; j++){
            var substr = inputString.substr(i, j + 1);
            var windowPosition = window.indexOf(substr);
            if(windowPosition > -1 && (i + j < inputString.length)){
                pos = windowPosition + i - window.length;
                length = j + 1;
            } else {
                break;
            }
        }
        if(pos > -1 ){
            res += "(" + pos + "," + length + ")";
            i += (j - 1);
        } else {
            res += char;
        }
    }
    return res;
}