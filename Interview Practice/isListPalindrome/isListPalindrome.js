// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function isListPalindrome(l) {
    var forward = "";
    var reverse = "";
    while (l) {
        forward += l.value + "|";
        reverse = l.value + "|" + reverse;
        if (l.next == null) break;
        l = l.next;
    }
    return forward.substring(0, Math.max(0, forward.length - 1)) == 
        reverse.substring(0, Math.max(0, reverse.length - 1));
}
​