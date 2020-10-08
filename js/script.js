console.log('js');

//display a calculated total cost of 4 chocolates @ $4.25 each
// var priceChocolate = 4.25;
// var quantity = 4;
//
// var total = priceChocolate * quantity;
// document.getElementById('quantity').innerHTML += ' ' + quantity;
// document.getElementById('total').innerHTML += total;

// Bagels
document.getElementById('submit').addEventListener('click',function(){
  // alert('hello');
  var cost = 4.35;
  var quantity = document.getElementById('quantityInput').value;
  console.log(quantity);
  var total = cost * quantity;
  console.log(total);
  var result = document.getElementById('result');
  result.innerHTML = "total cost of " + quantity + " bagels is NZ$ " + total.toFixed(2);
  var totalWithGST = total * 1.15;
  result.innerHTML += "<br>" + "total cost with GST is " +totalWithGST;
  console.log(totalWithGST);

});

// exercise 05 -02
document.getElementById('calculate').addEventListener('click',function(){
  // alert('hello');
  var totalCost = 3.80;
  var quantity = 13;
  console.log(totalCost, quantity);
  var cost = totalCost / quantity;
  console.log(cost);
  var muffins = document.getElementById('muffins');
  //toFixed() gives the required number of decimal places
  muffins.innerHTML = "Unit cost of " + quantity + " muffins is NZ$ " + cost.toFixed(2);
});


// exercise 05-04
var bagel = document.getElementById('bagel');

var totalAmount = 100;
var cost = 4.35;
// var nummberOfBagels = Math.floor(totalAmount / cost); //Math.floor() gets the integer part of the answer
var nummberOfBagels = parseInt(totalAmount / cost); //parseInt() converts float into integer
bagel.innerHTML += '<div class="jumbotron">' + 'Number of bagels at the cost of $4.35 for $ 100 is  ' + nummberOfBagels + ' </div>';
