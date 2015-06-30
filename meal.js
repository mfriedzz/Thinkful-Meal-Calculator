
var Dish = require('./models/Dish.js');
var Dinner = require('./models/Dinner.js');
var Diner = require('.models/Diner.js');
var TaxAndTip = require ('.models/meal_tax.js');

// meal.js
// Calculates tax, amount, tip
// Hi Michael!
var dish1 = new Dish(1, 'French Fries', 8);
var dish2 = new Dish(2, 'Bacon', 5);
var dish3 = new Dish(3, 'Ravioli', 13);

var diner1 = new Diner(1, "Michael Smith");
var diner2 = new Diner(2, "John Doe");

//var dinner1 = new Dinner('Michael farewell dinner');
var dinner1 = new Dinner(diner1);
var dinner2 = new Dinner(diner2);

dinner1.addDishToDinner(dish1);
dinner1.addDishToDinner(dish2);
dinner1.addDishToDinner(dish3);

dinner2.addDishtoDinner(dish1);
dinner2.addDishtoDinner(dish2);
dinner2.addDishtoDinner(dish3);

var totalCost1 = dinner1.calculateTotalAmount();
var totalCost2 = dinner2.calculateTotalAmount();

console.log(dinner1.totalAmount);
console.log(dinner2.totalAmount);

TaxAndTip(totalCost1);
TaxAndTip(totalCost2);



// window.onload=function(){
// 	var baseCost = parseFloat(prompt("Enter the dollar value for your meal, pre-tax (e.g., $15.74): $")); // We use parseFloat because the values we get from prompt will be cast to string type
// 	var taxRate = parseFloat(prompt("Enter the tax rate as a percentage (e.g., 22): ")) / 100;   // Divide by 100 to get to decimal value
// 	var tipRate = parseFloat(prompt("Enter the percentage tip you'd like to leave (e.g., 15): ")) / 100;
// 	var taxValue = computeAmount(baseCost, taxRate);
// 	var preTipCost = taxValue + baseCost;
// 	var tipValue = computeAmount(baseCost, tipRate);
// 	var totalCost = preTipCost + tipValue;
// 	var message = ("Tax for your meal is $" + taxValue.toFixed(2) + '. ' +
// 								"You should leave this $" + tipValue.toFixed(2) + " for tip. " +
// 								"The total cost for your meal is $" + totalCost.toFixed(2) + '.');
// 	alert(message);
// }