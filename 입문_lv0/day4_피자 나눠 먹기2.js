function solution(n) {
  for (let i = 1; i <= n; i++) {
    while ((6 * i) % n !== 0) {
      i++;
    }
    return i;
  }
}
