//loops 

//1.for loop

// for (let i = 0; i <10; i++) {
//     const element = i;
//     console.log(i); 
// }


// for (let i = 1; i <10; i++) {
//     console.log(`outer loop: ${i}`);   
//     for (let j = 1; j<= 10; j++) {
//         // console.log(`inner loop : ${j}`);

//         console.log(`${i}x${j}=${i*j}`);
            
//     } 
// }


// for aaray
// let array=[1,2,3,4,5,6]
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element);
    
// }
// let array=["vineet","yadav","name","ram"]
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element);
    
// }



// break 

// for (let i = 0; i <10; i++) {
  
//     if (i==5) {
//         console.log("5 is found");
//         break
        
//     }
//     console.log(i);
    
// }

//break

// for (let i = 0; i <10; i++) {
  
//     if (i==5) {
//         console.log("5 is found");
//         continue
        
//     }
//     console.log(i);
    
// }


//while loop

let index = 0
// while (index <= 10) {
//     console.log(`Value of index is ${index}`);
//     index = index + 2
// }

let myArray = ['flash', "batman", "superman"]

let arr = 0
while (arr < myArray.length) {
    //console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
}

let score = 11


// do while

do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);