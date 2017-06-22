function pairOfShoes(shoes) {
  var leftShoes = [];
  var rightShoes = [];
  for (var i = 0; i < shoes.length; i++) {
    if (shoes[i][0] === 0) {
      leftShoes.push(shoes[i][1]); 
    } else {
      rightShoes.push(shoes[i][1]);
    }
  }
  leftShoes.sort();
  rightShoes.sort();
  if (leftShoes.length !== rightShoes.length) {
    return false;
  }
  for (var i = 0; i < leftShoes.length; i++) {
    if (leftShoes[i] !== rightShoes[i]) {
      return false;
    }
  }
  return true;
}