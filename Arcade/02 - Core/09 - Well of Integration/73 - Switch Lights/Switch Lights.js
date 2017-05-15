function switchLights(a) {
        for (var i = 0; i < a.length; i++) {
                if (a[i] == 1) switchAllUpTo(a, i);
        }
        return a;
}
​
function switchAllUpTo(arr, x) {
        for (var i = 0; i <= x; i++) {
                arr[i] = switchSingle(arr[i]);
        }
}
​
function switchSingle(x) {
        return (x == 1) ? 0 : 1;
}