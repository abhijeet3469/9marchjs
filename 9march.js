// Arrays:- can contain numeric, string, decimal and objects also. In JS array considered as a data storage area in which value
//          get stored which is of any data type.

// Ways of using arrays:- (1.) using literals:-

// (a.) let arr = []; // empty array
//      console.log("array", arr);

// (b.) let arr = [1,12,3,4,5,6];
//      console.log("array", arr);


// (c.) let arr = [1,"string",1.2,{id:1, name: "abhijeet"},3,4,5,6];
//      console.log("array", arr);

// Access particular value from array by using index value:-

// (d.) let arr = [1,"string",1.2,{id:1, name: "abhijeet"},3,4,5,6];
//      console.log(arr[3]);

// (2.) By using constructor function

// (a.) let anotherArr = new Array();
//      console.log("array", anotherArr);

// (b.) let anotherArr = new Array(1,12,3,4,5,6);
//      console.log("array", anotherArr);

// (c.) let anotherArr = new Array(1,"string",1.2,{id:1, name: "abhijeet"},3,4,5,6);
//      console.log("array", anotherArr);

// Access particular value from array by using index value:-

// (d.) let anotherArr = new Array(1,"string",1.2,{id:1, name: "abhijeet"},3,4,5,6);
//      console.log(anotherArr[2]);

// Most important functions of array:- push, pop, shift, unshift

// Push:- When you want to add a new item inside the array at the end of the array.
// e.g.
// let values = ["a", "e", "i", "o", "u"];
// console.log(values);
// values.push(1);
// console.log(values);

// Pop:- Removes the last element of the array.
// e.g.
// let values = ["a", "e", "i", "o", "u"];
// console.log(values);
// values.push(1);
// console.log(values);
// values.pop();
// console.log(values);

// Shift:- Removes the first element of the array.
// e.g.
// let values = ["a", "e", "i", "o", "u"];
// console.log(values);
// values.push(1);
// console.log(values);
// values.pop();
// console.log(values);
// values.shift();
// console.log(values);

// Unshift:- To add element at the starting of array. You cannot add any elemnt in the middle of array.
// e.g.
// let values = ["a", "e", "i", "o", "u"];
// console.log(values);
// values.push(1);
// console.log(values);
// values.pop();
// console.log(values);
// values.shift();
// console.log(values);
// values.unshift("amit");
// console.log(values);

// Length of the array:-
// (a.)
// console.log(values.length);
// let values = ["a", "e", "i", "o", "u"];
// console.log(values);
// values.push(1);
// console.log(values);
// values.pop();
// console.log(values);
// values.shift();
// console.log(values);
// values.unshift("amit");
// console.log(values);
// Q:- Will it be able to access or not?
// Ans:- Uncaught ReferenceError: can't access lexical declaration 'values' before initialization.

// (b.)
// let values = ["a", "e", "i", "o", "u"];
// console.log(values);
// console.log(values.length);
// values.push(1);
// console.log(values);
// console.log(values.length);
// values.pop();
// console.log(values);
// console.log(values.length);
// values.shift();
// console.log(values);
// console.log(values.length);
// values.unshift("amit");
// console.log(values);
// console.log(values.length);
// Q:- Will it be able to access or not?
// Ans:- Yes. By studying GEC.

// (c.)
// let values = ["a", "e", "i", "o", "u"];
// console.log(values);
// console.log(values.length);
// values[6] = "vicky"; // Set any value inside array at any random index
// console.log(values);
// console.log(values[4]);
// console.log(values[5]);
// console.log(values[6]); //Access particular value from array by using index value.
// console.log(values.length);

// (d.)
// let values = ["a", "e", "i", "o", "u"];
// console.log(values);
// console.log(values.length);
// values[6] = "a";
// console.log(values);
// console.log(values.length); // Length will be counted even empty index.

// function to find out how many numeric values in an array:-
// (a.)
// function countString (arr) {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         if (typeof(element)==="number") count++;
//     }
//     return count;
// }
// const result = countString(["a", "b", "c", "d", "e", 1, 2, 3, 4, 5]);
// console.log(result);

// (b.)
// function countString (arr) {
//     let count = 0;
//     let tempArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         if (typeof(element)==="string") tempArr.push(element)
//     }
//     return tempArr;
// }
// const result = countString(["a", "b", "c", "d", "e", 1, 2, 3, 4, 5]);
// console.log(result);

// some and every function:- (1.) some and every are the functions which returns the boolean value i.e. true (1) or false (2).
// (2.) Both of these functions take call back function.
// (3.) Both of these takes conditions inside function.
// (4.) If condition satisfies for all the element then every function will return true. In case of some function, even if one
//      element is satisfying the condition then also it will return you true only.

let arr = [1, 2, 3, 3, 4, 4];
const value1 = arr.some(element => element>2); // Call back function.
const value2 = arr.every(element => element>2); // Call back function.
console.log(value1, value2);