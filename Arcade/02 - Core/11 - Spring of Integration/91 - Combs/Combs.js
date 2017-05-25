function combs(comb1, comb2) {
    function toBoolean(x) {
        return (x == "*") ? true : false;
    }
    
    function getValue(arr, index) {
        // get value of arr if exists, else return false
        if (
            index < 0 || 
            index >= index.length || 
            arr.length == 0
        ) return false;
        return arr[index];
    }    
    var c1 = comb1.split("").map(toBoolean);
    var c2 = comb2.split("").map(toBoolean);
    
    var padding = c1.length;
    var minLength = c1.length + c2.length;
    
    for (var padding = c2.length; padding >= -c1.length; padding--) {
        var valid = true;
        for (var i = 0; i < c1.length; i++) {
            if (c1[i] && getValue(c2, i + padding)) {
                valid = false;
                break;
            }
        }
        if (valid) {
            minLength = Math.min(
                minLength,
                Math.max(
                    c1.length,
                    c2.length,
                    c1.length + padding,
                    c2.length - padding
                )
            );
        }
    }
    return minLength;
}
​