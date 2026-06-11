// // for of  (loop)

// let arr=[1,3,4,5,6]
//  for (const num of arr) {
//     // console.log(num);
    
//  }

//  let name="vineet yadav"
//  for (const i of name) {
//     // console.log(`${i}`);
    
//  }


//  let name = "vineet yadav";

// for (const i of name) {
//     if (i !== " ") {
//         // console.log(i);
//     }
// }


// //map

// const map= new Map()
// map.set('in',"india")
// map.set('amc',"america")
//  console.log(map);
 



 //for in (loop)

 const myobj={    js: 'javascript',
    cpp: 'c+++',
    rb:'rubby'
 }

 for (const i in myobj) {
    console.log(myobj[i]);
        
 }

 //foreach concept

 const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )