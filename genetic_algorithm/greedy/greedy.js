
(function fractionalKnapsack(item, w) {
  var test = [[1,60,10], [2,100,20], [3,120,30]];
  var sorted = item.sort(function(prev, cur) {
    return cur[1] / cur[2] - prev[1] / prev[2]; // 무게 대비 가치 순으로 정렬
  });
  var limit = w;
  var result = 0;
  for (var i = 0; i < sorted.length; i++) {
    var cur = sorted[i];
    if (limit > 0) {
      if (limit >= cur[2]) { // 물건 무게가 제한 이하일 경우
        limit -= cur[2];
        result += cur[1];
      } else { // 물건 무게가 제한 초과일 경우
        result += cur[1] / cur[2] * limit; // 잘라서 넣음
        limit = 0;
      }
    } else {
      break;
    }
  }
  console.log(result);
  return result;
})(test,50);
//fractionalKnapsack(test, 50); // 240