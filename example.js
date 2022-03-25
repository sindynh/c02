//create variables for the welcome message
var greeting ='Howdy';
var name ='Molly';
var message = ', please check your order:';
// Concantenate the three variables above to create the welcome message 
var welcome = greeting + name + message;

//Create variables tp hold details about the sign 
var sign = 'Montague House';
var tiles= sign.length;
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;

//get the element thaat has an id of greeting
var el= document.getElementById('greeting');
//replace the content of that element with the personalized wleocme message 
el.textContent = welcome;

//get the element that has an id of userSign then update its contents 
var elSign = document.getElementById('userSign');
elSign.textContent= sign;

//get the element that has an id of tiles then update its contents
var elTiles = document.getElementById('tiles');
elTiles.textContent = tiles;

//get the elemt that has an id of subTotal then update its contents
var elsubTotal = document.getElementById('subTotal');
elsubTotal = '$' + subTotal;

//get the element that has an id of shipping then update its contents 
var elsubTotal = document.getElementById('shipping');
elsubTotal.textContent = '$' + shipping;

//get the element that has an id pf grandTotal then update its contents
var elGrandtotal = document.getElementById('grandTotal');
elGrandtotal.textContent = '$' + grandTotal;