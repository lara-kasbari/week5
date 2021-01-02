// Challenge Name: Return the Sum of Two Numbers
// Challenge Difficulty: Very easy

function Sum(a, b) {
  return a + b;
}
console.log(Sum(1, 2))

// Challenge Name: Add up the Numbers from a Single Number
// Challenge Difficulty: easy

function addUp(num) {
  var total = 0;
  for (var i = 1; i <= num; i++) {
    total += i;
  }
  return total;
}
console.log(addUp(3))

// Challenge Name: How Much is True?
// Challenge Difficulty: Meduim

function countTrue(arr) {
  var total=0; 
	for (var i = 0; i < arr.length; i++) {
	
    if (arr[i]==true) {
      total++;
    }
    
  }
return total;
  
}
console.log(countTrue ([true, false, false, true, false]))


// Challenge Name: Calculate the Total Price of Groceries
// Challenge Difficulty:Hard


function cost(groceries) {
var total=0; 
  for (var i=0; i<groceries.length; i++)
  {
    total+= groceries[i].price* groceries[i].quantity;
  }
  return total;
}

console.log (cost([
  { product: "Milk", quantity: 1, price: 1.50 },
  { product: "Eggs", quantity: 12, price: 0.10 },
  { product: "Bread", quantity: 2, price: 1.60 },
  { product: "Cheese", quantity: 1, price: 4.50 }
]))