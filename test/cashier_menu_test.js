var assert = require('assert');
var orderTest = require('../cashier_menu.js');

describe("Solution", function() {
  it("Example Tests", function() {
    assert.equal(orderTest("milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"),
                      "Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke");
    assert.equal(orderTest("pizzachickenfriesburgercokemilkshakefriessandwich"),
                     "Burger Fries Fries Chicken Pizza Sandwich Milkshake Coke");
  });
});
 
