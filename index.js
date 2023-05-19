// Why we should avoid using var keyword when creating a variable;
// 1.
// Initializing any variable with var keyword then it will polute the intire code
// if(true){
//      var value = true;
// }
// console.log(value); // true
// here in upper code we dosent want that anything(variables) 
// shows outside the block which we created but if we use var 
// then it will show the output globally(poluting the intire code);

// 2.
// var creates a window property for browser and it can consume more storage and creates polution too
// var product = "Mobile";
// here in browser's console you will found in window object if
//  you apply dot method and use product then it will show the value of
//  product(it saves the value in window object unncesserily);

// Why should we use let and const keywords(according to our need) when creating a variable;

// 1.
// Initializing any variable with var keyword then it will not polute the code strurtre;

// if (true) {
//   let value1 = true;
//   const value2 = false;
// }

// console.log(value1); // value1 is not defined
// console.log(value2); // value2 is not defined
// here in upper code we dosent want that anything(variables) shows outside the block and when we are using
//  let or const keywords it is throwing as an error showing --> value1 and value2
//  is not defined <-- means it is not poluting our code;

// 2.
// let and const does not creates any window property for browser so our website will run much faster then usual if we follow this;
// let product1 = "Mobile";
// const product2 = "Tablet";
// here in browser's console you will not in window object if
//  you apply dot method and use product then it will show undefined as the value never saved in window object;



