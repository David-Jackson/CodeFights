function areSimilar(a, b) {
    for(var i = 0; i < a.length; i++) {
        for(var j = i; j < a.length; j++) {
            var equal = true,
            tmp = a[i];
            a[i] = a[j];
            a[j] = tmp;
            for(var k = 0; k < a.length; k++) {
                if(a[k] !== b[k]) {
                    equal = false;
                    break;
                }
            }
            if(equal) {
                return true;
            }
            a[j] = a[i];
            a[i] = tmp;
        }
    }
    return false;
}