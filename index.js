$(function(){

$("button").click(function(){
  //  alert("The button was clicked.");

 var customerDue=$("#customerDue").val();
 var customerGiven=$("#customerGiven").val();
 var quarter = 0;
 var  dime = 0;
 var nickle = 0;
 var penny = 0;


 var remaining = customerGiven - customerDue;
 var dollar= Math.trunc(remaining);
 var  money= (remaining.toFixed(2) - dollar) +0.0009;
while(money>0){

            	if(money >= 0.25){
                    money = money - (.25);
                    quarter = quarter + 1;
                }
            else if(money >= 0.10){
                    money =(money - .10);
                    dime = dime + 1;
                }
            else if(money >= 0.05){
                    money = money - .5;
                    nickle = nickle + 1;
                }
            else if(money >= 0.01){
                    money = money - 0.01;
                    penny = penny + 1;
                }

               else if(money < 0.01){ 
               	break;
   }             }

$("#dollars").html(dollar);

$("#Quarters").html(quarter);
$("#Dimes").html(dime);
$("#Nickels").html(nickle);
$("#Pennies").html(penny);
$("#remaining").html(remaining.toFixed(2));

});
});