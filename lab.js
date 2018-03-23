// Getting user name and adding it to the page.
var userName = window.prompt("Please enter your name: ");
var greetingParagraph = document.getElementById ("greeting");
greetingParagraph.innerHTML += userName.toUpperCase();

// Getting the two numbers from user
var num1 = parseInt(window.prompt("Enter the first number"));
var num2 = parseInt(window.prompt("Enter the second number"));

// Adding the numbers to the page
var span1 = document.getElementById ("operand1");
var span2 = document.getElementById ("operand2");
span1.innerHTML = num1;
span2.innerHTML = num2;

// creating variables for the operations
var sum = num1 + num2;
var difference = num1 - num2;
var quotient = num1 / num2;
var product = num1 * num2;
var modResult = num1 % num2;

// writing paragraphs in article with results
var twoNums = num1 + " and " + num2 + " is "
document.getElementById("addition").innerHTML = "The sum of " + twoNums + sum;
document.getElementById("difference").innerHTML = "The difference between " + twoNums + difference;
document.getElementById("product").innerHTML = "The product of " + twoNums + product;
document.getElementById("quotient").innerHTML = "The quotient of " + twoNums + quotient;
document.getElementById("modulus").innerHTML = "The result of the mod operation of " + twoNums + modResult;