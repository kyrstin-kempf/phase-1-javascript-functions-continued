// FUNCTION DECLARATION
// function razzle() {}
// 'razzle'is pointer to call/invoke function with '()'
// razzle()
// value inside () is the default argument

function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

// HOISTING
// calling functions before they appear in sequence is hoisting

// FUNCTION EXPRESSION
// primitive values: 1+1, 'razzle' + 'dazzle'
// function expression uses GROUPING OPERATOR () like follows:
// (function () {
//    console.log('Yet more razzling');
// });
// 

// ANONYMOUS FUNCTION
// function with no name - no way to call it!
// access anonymous function by assigning function as value
// const fn = function () {
// console.log('Yet more'); };
// fn; => f () {console.log('Yet more')}
// to call --> fn();  => 'Yet more'

function mondayWork (activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
}

// IIFE - IMMEDIATELY-INVOKED FUNCTION EXPRESSION
// to invoke an anonymous function --> IIFE
// (function (baseNumber) {
//      return baseNumber + 3;
// }) (2);  => 5

// FUNCTION LEVEL SCOPE
// nested functions can see parent

/*
function outer(greeting, msg = "It's a fine day to learn") {
  return function (name, lang = "Python") {
    return `${greeting}, ${name}! ${msg} ${lang}`;
  };
}

outer("Hello")("student", "JavaScript");
//=> "Hello, student! It's a fine day to learn JavaScript"
*/

function wrapAdjective (flair = "*") {
    return function (adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`;
    };
}