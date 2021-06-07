const digitalRoot = (num) => {
    const result =  num.toString().split("").map(num => num*1).reduce((acc, cur) => acc += cur, 0)
    if(result > 9) {
        return digitalRoot(result);
    }
    return result;
  
   

}


// const digitalRoot = (str) => {
//     const res = str.toString().split('').reduce((acc, char) => Number(char) + acc, 0)
//     if (res.toString().length === 1) {
//         return res
//     }
//     return digitalRoot(res)
//   }

console.log(digitalRoot(345))