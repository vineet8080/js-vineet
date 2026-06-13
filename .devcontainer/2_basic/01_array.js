// //array

// let arr = [1,2,3,4,5]
// console.log(arr[3])



// // array method
// arr.push(0)
// arr.push(0)                //piche se add hota hai 
// console.log(arr)
// arr.pop()                 //piche se nikalta hai
// arr.pop()
// console.log(arr)

// arr.unshift(8)           //aage se add hota hai 
// console.log(arr)
// arr.shift()            //age se delete hota hai 
// console.log(arr)



// let newarr = arr.join()      // join karne par array ko string me convert kar sakte hai 
// console.log(arr)
// console.log(newarr);


// //slice or splice


// console.log("a",arr);

// let arr1=arr.slice(1,3)  //copy karte ke place karta hai ..lekin original me kuch cut nhi hota 
// console.log(arr1);       //isme 3 count nhi hota hai
// console.log("b",arr);


// let arr2=arr.splice(1,3)    //isme original me se cut ho jat hai 
// console.log(arr2);          //isme 3 bhi count hoga
// console.log("c",arr);

//// array second part



let num1=[1,2,3,4]
let num2=[5,6,7,8]

// num2.push(num1)
// console.log(num2)          ///not a correct  method
                       
//concat method

a=num1.concat(num2)
console.log(a);                //kabhi kabhi glt kaam karta hai

//dot method

let b=[...num1,...num2]    //isme multiple array ko ke join kar sakte hai
console.log(b);


//if multiple colapse in array

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

// console.log(Array.isArray("Hitesh"))
// console.log(Array.from("Hitesh"))
// console.log(Array.from({name: "hitesh"})) // interesting

// let score1 = 100
// let score2 = 200
// let score3 = 300

// console.log(Array.of(score1, score2, score3));

