let fiftyThirtyTwenty = function(sum){
   return console.log({"Needs": sum/100*50, "Wants": sum/100*30, "Savings": sum/100*20});
}


fiftyThirtyTwenty(10000); // ➞ { "Needs": 5000, "Wants": 3000, "Savings":2000 }
fiftyThirtyTwenty(50000); // ➞ { "Needs": 25000, "Wants": 15000,"Savings": 10000 }
fiftyThirtyTwenty(13450); // ➞ { "Needs": 6725, "Wants": 4035, "Savings":2690 }