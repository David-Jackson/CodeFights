function containsDuplicates(a) {
    var nums = {};
    for (var i in a) {
        if (!nums[a[i]]) {
            nums[a[i]] = true;
        } else {
            return true;
        }
    }
    return false;
}
​