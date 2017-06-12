function findEmailDomain(address) {
    var arr = address.split("@");
    return arr.pop();
}
​