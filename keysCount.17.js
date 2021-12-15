let getFrequencies = function (arr){
    let obj = {};
    for(let i = 0; i<arr.length ; i++){
        let element = arr[i];
        
        if(obj[element] !== undefined){
            obj[element] += 1;
        }else{
            obj[element] = 1;
        }
    }
    return obj;
}



// console.log(getFrequencies(["A", "B", "A", "A", "A"]));// ➞ { A: 4, B: 1 }
// getFrequencies([1, 2, 3, 3, 2])// ➞ { "1": 1, "2": 2, "3": 2 }
// console.log(getFrequencies([true, false, true, false, false]))// ➞ { true: 2, false: 3 }
// getFrequencies([])// ➞ {}