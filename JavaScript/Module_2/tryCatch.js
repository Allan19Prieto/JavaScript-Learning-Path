/* try {
    // Code that may throw an error
    let result = someUndefinedFunction(); // This function is not defined
} catch (error) {
    console.error("An error occurred:", error);
}

try{
    console.log(a+b);
}   catch(err){
    console.log("This error is caught: " + err);
} */

//console.log(a + b);
//console.log("This line will not execute due to the error above.");

//throw new ReferenceError();

try {
    console
} catch (err) {
    console.log("An error occurred: " + err);
}
console.log("My program continues to run normally.");

function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

try {
  console.log(divide(5, 0));
} catch (error) {
  console.error(error.message); // Division by zero is not allowed.
}


