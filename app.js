// ******************************Q:3***************************

for (var i = 1; i <= 10; i++) {
    document.write(i + "<br>");

  }
  document.write("<br>");
  
  // ******************************Q:4***************************
  
  var userinput1 = +prompt("Enter the to show its Multiplication Table");
  
  var userinput2 = +prompt("Enter length Multiplication Table");

  document.write("<h3>"+ " Table of " +userinput1+"</h3>")
  
  for (var t = 1; t <= userinput2; t++) {
    document.write(userinput1 + "x" + t + "=" + userinput1 * t + "<br>");
  }
  document.write("<br>");
  // ******************************Q:5***************************
  
  var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
  
  for (i = 0; i < fruits.length; i++) {
    document.write("Element at index " + i + " is " + fruits[i] + "<br>");
  }
  
  // ******************************Q:6***************************
  // A

  document.write("<h3>"+ " Counting"+"</h3>")

  for (var i = 1; i <= 10; i++) {
    document.write(i + ",");
  }
  
  document.write("<br>")
  
  // B


  document.write("<h3>"+ "Reverse Counting"+"</h3>")
  
  for (var i = 10; i >= 1; i--) {
      
  
    
    document.write(i + ",");
  }




// C


document.write("<h3>"+ "Even"+"</h3>")

for (var i=0;i<=15;i++){
    if(i%2===0){
        document.write(i +",")
    }
}


// D

document.write("<h3>"+ "Odd"+"</h3>")

for (var i=1; i <= 15; ++i){
  if(i%2===0){
}

else{
  document.write(i +",")
}
}

// E

document.write("<h3>"+ "Even"+"</h3>")

for (var i=2;i<=20;i++){
    if(i%2===0){
        document.write(i +"k" +",")
    }
}
document.write("<br>")
  
  // ******************************Q:7 ***************************



  
  var A = ["cake","apple","pie","cookie","chips","patties"]
  
  var barkery = prompt("Welcome ABC Bakery.What Do you want to order sir/ma'am?")

  if(barkery === A[0]){
    alert(barkery +" is available at in our bakery")
  }
 else if(barkery === A[2]){
    alert(barkery +" is available at in our bakery")
  }

 else if(barkery === A[3]){
    alert(barkery +" is available at in our bakery")
  }

 else if(barkery === A[4]){
    alert(barkery +" is available at in our bakery")
  }

 else if(barkery === A[5]){
    alert(barkery +" is available at in our bakery")
  }

 
  
else{
  alert("We are Sorry " + barkery +" is not available at in our bakery")
}

document.write("<h3>"+ "Array Items:"+"</h3>")

  // ******************************Q:8 ***************************


var B= [24, 53, 78, 91, 12]

document.write(B)


document.write("<h3>"+ "Largest Number:"+"</h3>")

document.write(Math.max(...B));  


document.write("<h3>"+ "Array Items:"+"</h3>")


  // ******************************Q:9 ***************************



var C = [24, 53, 78, 91, 12]

document.write(C)



document.write("<h3>"+ "Smallest Number:"+"</h3>")

document.write(Math.min(...C));


document.write("<br>");





  // ******************************Q:10 ***************************







  document.write("<h3>"+ " Multiples of 5 ranging 1 to 100:"+"</h3>")


for (var t = 1; t <= 20; t++) {
  document.write( 5 * t + ",");
}

































