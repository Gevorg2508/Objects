let printSum = function (operator, ...values){
    if(operator === "*"){
        return values.reduce((akk,curr) => akk * curr);
    }else if(operator === "-"){
        return values.reduce((akk,curr) => akk - curr);
    }else if(operator === '**'){
        return values.reduce((a, b) => Math.pow(a,b));
    }else {
        return values.reduce((a,b) => a+b, operator)
    }
}

// console.log(printSum("*", 1, 2, 3)); // 6
console.log(printSum(1, 2, 3, 4, 5)); // 15
// console.log(printSum("-", 1, 2, 3, 6, 7)); // -17
console.log(printSum("**", 2, 3, 2)); // 64
