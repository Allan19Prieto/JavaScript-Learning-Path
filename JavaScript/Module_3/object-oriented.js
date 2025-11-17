 //functional programming
 var shoes = 100;
 var stateTax = 1.2;

 function totalPrice(shoes, tax) {
    return shoes * tax;
 }

 var toPay = totalPrice(shoes, stateTax);

 console.log(toPay); // 120

 //object-oriented programming 
// OOP 1
 var purchase1 = {
    shoes: 100,
    stateTax: 1.2,
    totalPrice: function() {
        var calculation = this.shoes * this.stateTax;
        console.log('Total price:', calculation);
    }
 }

 purchase1.totalPrice(); // total price : 120

 // OOP 2
 var purchase2 = {
    shoes: 50,
    stateTax: 1.2,
    toalPrice: function() {
        var calculation = purchase2.shoes * purchase2.stateTax;
        console.log('Total price:', calculation);
    }
 }

purchase2.toalPrice(); // total price: 60


