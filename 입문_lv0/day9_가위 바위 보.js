function solution(rsp) {
  var answer = "";
  const match = { 2: "0", 0: "5", 5: "2" };
  answer = rsp
    .split("")
    .map((v) => match[v])
    .join("");
  return answer;
}
