const name="vineet"
const age=99

console.log(`my name is ${name} and  my age is ${age} `)

// string ko ek or tarike se declare kar sakte hai 

const gameName = new String('    vineet')
const newname= new String('yadav')

console.log(gameName.length)
console.log(gameName.charAt(4))    // negative ko support nhi karta hai 
console.log(gameName.at(-1))        //dono negative positive  ko support karta hai
console.log(gameName.charCodeAt(3))   //ascii code number hota hai 
console.log(gameName.codePointAt(2));   // bade ascii code jaise emoji ke hote hai wo dikhata hai
console.log(gameName.codePointAt(5));   // bade ascii code jaise emoji ke hote hai wo dikhata hai
console.log(gameName.concat(newname));   // kis word ke aage kuch continue jodna hai to use karta hailog
console.log(gameName.includes("ne"));  //wo string kahi pe bhi present hai ya nhi
console.log(gameName.endsWith('y'));     // last string use end ho rha hai ki nhi wo check kart hai
console.log(gameName.indexOf('t'))       // uska index number batata hai konse pos pe hai
console.log(gameName.replace(gameName,newname));   //kisi ko kisi or name se replace karna ho to
console.log(gameName.split(""));            // array me convert karta hai thodh kar 
console.log(gameName.slice(-2));            //ye cut krta hai lekin negative ko bhi consider kart ahai 
console.log(gameName.substring(2));        //ye negative ko consider nhi karta hai
console.log(gameName.trim());               //start oor end ke space ko remove karta hai 
console.log(gameName.toUpperCase(newname))  //ye capital me convert karta haui 
console.log(gameName.toLowerCase(newname));  //ye small letter me convert karta hai
// or bhi hai .............
// .............



// Most Important Methods for Interviews
// slice()
// substring()
// split()
// replace()
// trim()
// includes()
// indexOf()
// startsWith()
// endsWith()

