// const num=8990.7788
// // console.log(num);

// // const nu=new Number(7787)
// // console.log(nu);

// console.log(num.toFixed(2));    //decimal ke baad kitna fixed rhata hai aprrox karta hai
// console.log(num.toExponential())  //10 ka power mw convert karta hai
// console.log(num.toLocaleString());   //readable form me convert karta hai
// console.log(num.toLocaleString('en-IN')); //indian kaisa dekhte hai wo batata hai
// console.log(num.toPrecision(6));      // kaha tak tumhe number chahiye or ise thoda 
//                                       //number dekh kar use kiya jata hai 



//  // ................................maths.............................

// console.log(Math);  //aap inspect pe bahut check kar sakte ho

// console.log(Math.abs(-4));        //absolute value deta hai only positive
// console.log(Math.round(4.6));    //roudoff kr dega
// console.log(Math.ceil(4.2));     //round off karega lekin bada number he dega
// console.log(Math.floor(4.9));    //round off karega lekin chotta value dega
// console.log(Math.min(4, 3, 6, 8));     //sabse chhota value dega
// console.log(Math.max(4, 3, 6, 8));     //sabse bada value dega
// // ..........or bhi hai google pe

console.log(Math.random());     // o se 1 ke bichh he dega 
console.log((Math.random()*10)+1);     
console.log(Math.floor(Math.random()*10)+1);    // ye acha hai 
// ek or tarika 

const min=20
const max=100

console.log(Math.floor(Math.random()*(max-min+1)+min))  // ye formula base me hai 