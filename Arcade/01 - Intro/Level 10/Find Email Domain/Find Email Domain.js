function findEmailDomain(address) {
    var arr = address.split("@");
    return arr[arr.length - 1];
}
​