function properOrImproper(a) {
​
  if (Math.abs(a[0] / a[1]) < 1) {
    return 'Proper';
  }
  return  'Improper' ;
}
​