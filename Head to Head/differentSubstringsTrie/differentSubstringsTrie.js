function differentSubstringsTrie(inputString) {
   var vals = [];
   for (var i = 0; i < inputString.length; i++) {
       for (var j = i + 1; j <= inputString.length; j++) {
           var sub = inputString.substring(i, j);
           if (vals.indexOf(sub) == -1) vals.push(sub);
       }
   }
   return vals.length;
}
​