function areIsomorphic(array1, array2) {
    return array1.length == array2.length &&
        array1.every(function(el, index, arr) {
            return array2.length > index && el.length == array2[index].length;
        });
}
​