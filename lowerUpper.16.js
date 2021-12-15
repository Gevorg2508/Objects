let mapping = function(array){
      let obj = {};
      for(let i = 0; i<array.length ;i++){
          obj[array[i]] = array[i].toUpperCase();
      }
      return obj;
}
console.log(mapping(['p','s']));

// mapping(["p", "s"]) ➞ { "p": "P", "s": "S" }
// mapping(["a", "b", "c"]) ➞ { "a": "A", "b": "B", "c": "C" }
// mapping(["a", "v", "y", "z"]) ➞ { "a": "A", "v": "V", "y": "Y", "z": "Z" }