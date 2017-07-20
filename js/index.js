var itemArray = [0,0,0,0,0];

var priceArray = [0,0,0,0,0]

//alerts the user to the number and subtotal of chickens they bought
function addChicken(){
 priceArray[0] += 9.99;
 itemArray[0] ++; 
 alert("You have added " + itemArray[0] + " Chicken(s). Your Chicken total is $" + priceArray[0] ) 
}

//alerts user to the number and subtotal of the brocolli heads they bought
function addBroccolli(){
  priceArray[1] += 1.24;
   itemArray[1] ++; 
  alert("You have added " + itemArray[1] + " head(s) of Broccolli. Your Broccolli total is $" + priceArray[1] )
}

//alerts the user to the number and subtotal of the rice packs they bought
function addRice(){
  priceArray[2] += 1.99;
   itemArray[2] ++; 
  alert("You have added " + itemArray[2] + " Easy-Make rice pack(s). Your rice total is $" + priceArray[2] )
}

//alerts the user to the number of macaroni boxes and subtotal they have bought
function addMacaroni(){
  priceArray[3] += 2.49;
   itemArray[3] ++;
  alert("You have added " + itemArray[3] + " boxe(s) of macaroni. Your macaroni total is $" + priceArray[3] )
}

//alerts the user of the number of beer items and subtotal they have bought
function addBeer(){
  priceArray[4] += 14.99;
   itemArray[4] ++; 
  alert("You have added " + itemArray[4] + " case(s) of beer. Your beer total is $" + priceArray[4] )
}

function checkOut(){
  var reciept = "Reciept: \n";
  var sum = 0;
  
  //Loops through the price array to find the total amount
  for (var i = 0; i < priceArray.length; i++){
      sum = sum + priceArray[i];
  }
  
  //If any of the items were added it will add to the reciept 
  if (itemArray[0] > 0){
    reciept += "\n" + itemArray[0] + " Chickens -- " + priceArray[0];    
  }
  if (itemArray[1] > 0){
    reciept += "\n" + itemArray[1] + " Broccolli -- " + priceArray[1];
  }
  if (itemArray[2] > 0){
    reciept += "\n" + itemArray[2] + " Rice Packets -- " + priceArray[2];   
  }
  if (itemArray[3] > 0){
    reciept += "\n" + itemArray[3] + " Macaroni Boxes -- " + priceArray[3];   
  }
  if (itemArray[4] > 0){
    reciept += "\n" + itemArray[4] + " Beer Cases-- " + priceArray[4];   
  }
  
  var total = (sum * 1.06);
  var finalPrice = total.toFixed(2);
  
  alert(reciept + "\n Subtotal: " + sum + "\n Your total bill with tax is: " + finalPrice)
}