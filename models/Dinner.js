var Dinner = function(name){
  this.name = name; //Only value passed in as parameter
  this.dishes = [];
  this.totalAmount = 0;
};

Dinner.prototype.addDishToDinner = function(dish){
  this.dishes.push(dish);
};




Dinner.prototype.calculateTotalAmount = function (){
  var total = 0;
  
  this.dishes.forEach(function(item){
    total += item.price;
  });
  
  this.totalAmount = total;
};

// Calculate Taxes and Tip

Dinner.prototype.computeAmount = function (base, percentage) {
	return base * percentage;
}
 

module.exports = Dinner;
