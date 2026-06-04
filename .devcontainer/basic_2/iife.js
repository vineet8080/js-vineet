// imediately invoked function expression (iife)

///ye isliye use hota ki global polution n ho
(function vin(){
   //name iife 
    console.log("hello vineet");
    
})();

//ek or  tarika hai
 ( ()=>{
    console.log("vineet");          //simple iife
    
 })();


  ( (name)=>{
    console.log(`vineet ${name}`);
    
 })('thik hai')


