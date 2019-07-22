let customer = "Joe";
(function (){
    console.log("1. The name of the customer inside the function is "  + customer);
     if (true) {
         customer = "Mary";
     }
     //let customer = "xxx";
     console.log("2. The name of the customer inside the function is "  + customer);  
})();

console.log("3. The name of the customer outside the function is "  + customer); 

