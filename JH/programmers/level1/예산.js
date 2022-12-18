function solution(d, budget) {
    var answer = 0, sum = 0;
    d.sort((a,b) => a - b); //오름차순 정렬

    for(let i = 0; i < d.length; i++){
        answer++; 
        sum += d[i]

        if(sum > budget)
            answer--;
    }
  
    return answer;
}

// function solution(d, budget) {
//     d.sort((a, b) => a - b);
//     while (d.reduce((a, b) => (a + b), 0) > budget) {
//       d.pop();
//     }

//     return d.length;
// }
