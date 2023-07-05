

//1 task 1decaliring variable usinglet var  const

function myfunction(){
    var myVar = "Hello";
    let myLet = 42;
    const myConst = true;

    console.log("myVar:", myVar);
    console.log("myLet:", myLet);
    console.log("myConst:", myConst);

}

myfunction();


//2 Write a function that takes two numbers as arguments and returns their sum, difference,
// product, and quotient using arithmetic operators.


function mysum(a,b){
    return a+b;
    
    }
    function mydiff(a,b){
        return a-b;
    
    }
    function mymul(a,b){
    return a*b;
    }
    function mydiv(a,b){
    return a/b;
    }
                                            
    console.log("sum is "+mysum(1,2));
    console.log(`sum is ${mysum(1,2)}`);
    console.log("diff is "+mydiff(5,1));
    console.log("mul is "+mymul(5,1));
    console.log("div is "+mydiv(5,2));
    


//3 Write a program that prompts the user to enter their age. Based on their age, display
// different messages:
// ○ If the age is less than 18, display "You are a minor."
// ○ If the age is between 18 and 65, display "You are an adult."
// ○ If the age is 65 or older, display "You are a senior citizen."

function displayAgeMessage(age) {
    if (age < 18) {
      console.log("You are a minor.");
    } else if (age >= 18 && age <= 65) {
      console.log("You are an adult.");
    } else {
      console.log("You are a senior citizen.");
    }
  }

let a = prompt("enter number:");
displayAgeMessage(a);


//4  Write a function that takes an array of salary as an argument and returns the min/max
// salary in the array.

function findMinMaxSalary(salaries) {
    var minSalary = Math.min(...salaries);
    var maxSalary = Math.max(...salaries);
  
    return {
      min: minSalary,
      max: maxSalary
    };
  }
  var salaries = [30000, 50000, 25000, 70000, 40000];
  var result = findMinMaxSalary(salaries);
  console.log(result);


//5 Create an array of your favorite books. Write a function that takes the array as an
// argument and displays each book title on a separate line.

var favoriteBooks = [
    "1984",
    "Pride and Prejudice",
  ];
  
  function displayBookTitles(books) {
    for (var i = 0; i < books.length; i++) {
      console.log(books[i]);
    }
  }
  displayBookTitles(favoriteBooks);

//6 Declare a variable inside a function and try to access it outside the function. Observe the scope behavior and explain the results. [var vs let vs const]
/*function testScope() {
    var myVar = "Hello";
  }
  
  testScope();
  console.log(myVar);

  function testScope() {
    let myLet = "Hello";
  }
  
  testScope();
  console.log(myLet); 

  function testScope() {
    const myConst = "Hello";
  }
  
  testScope();
  console.log(myConst);
*/

//7 Create an HTML page with a button. Write JavaScript code that adds an event listener to the button and changes its text when clicked.
var button = document.getElementById("myButton");

    button.addEventListener("click", function() {
      button.textContent = "Button Clicked!";
    }); 


//8 Write a function that takes a number as an argument and throws an error if the number
// is negative. Handle the error and display a custom error message.

function newfunction(a){

if(a<0)
    throw "negative number"
}
try{
    newfunction(-10);
}
catch(err){
    console.log("error is "+err)
}


//9 Write a function that uses setTimeout to simulate an asynchronous operation. Use a
// callback function to handle the result.
function simulateAsyncOperation(callback) {
    setTimeout(function() {
      var result = 92;
      callback(result);
    }, 5000);
  }
  
  console.log("Start of program");
  
  simulateAsyncOperation(function(result) {
    console.log("Async operation completed with result:", result);
  });
  
  console.log("End of program");

