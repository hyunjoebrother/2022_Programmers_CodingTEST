function solution(numlist, n) {
  var answer = [];
  answer = numlist.sort((a, b) => {
    var [aDistance, bDistance] = [Math.abs(a - n), Math.abs(b - n)];
    if (aDistance === bDistance) return b - a;

    return aDistance - bDistance;
  });

  return answer;
}
