// let a=10
// const b=90
// var c=97
 
if(true){
   let a=10
   const b=90
   var c=97   //avoid var that why

}


// console.log(a);
// console.log(b);
// console.log(c);


//scope ke ander hai wo bahar nhi jana chahiye lekin jo global hai wo ander aa sakta hai




//////...................nested scope.......................//

function one(){
    const firstname= "vineet"

    function two(){
        const surname="yadav"
        console.log(firstname)

    }
    // console.log(surname);
    two()

}
one()


