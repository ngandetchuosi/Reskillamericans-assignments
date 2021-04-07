function sumCalculator(arrnum){
    let sum = 0;
    for (let i = 0; i < arrnum.length; i++){
        sum += arrnum[i];
    }

    return sum;
}

console.log(sumCalculator([1,1,1,2]))
console.log(sumCalculator([5,1,3,2]))