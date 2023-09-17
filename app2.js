// ****************************Q:1*****************************

for(var i= 1; i <=10;i++ ){
    document.write("Welcome To My Page" + "<br>")
}



document.write( "<br>")



// ****************************Q:2*****************************



for(var i= 0; i <=12;i++ ){
    document.write("Welcome User" + "<br>")
}



document.write( "<br>")



// ****************************Q:3*****************************



for (var i = 0; i <= 4 ;i++ ){
    document.write("Statement Complete "  + "<br>")
}


document.write( "<br>")

// ****************************Q:4*****************************






for(var i= 1; i <101;i++ ){
    document.write("Welcome User My Web Page" + " , ")
}



document.write( "<br>"+"<br>"+"<br>")


// ****************************Q:5*****************************



for (var i = 4; i > 1 ;i-- ){
    document.write("Statement Complete 02 "  + "<br>")
}


document.write( "<br>")


// ****************************Q:6*****************************

var userCity = prompt("Where do you live??");

var arr = ["Pakistan", "India", "Bangladash", "Agfganistan", "Iran"];

for (var i = 0; i <= arr.length; i++) {
  if (userCity ===arr[i] ) {
    alert("It is Beautifull Country..");
  }
}


// ****************************Q:7*****************************



 var flag = true;




// ****************************Q:8*****************************


var userPets = prompt("Name of yours favourite pets ??");

var arr = ["Tiger", "cat", "dog", "Rabit", "Tirtle"];

for (var i = 0; i <= arr.length; i++) {
  if (userPets ===arr[i] ) {
    alert("Wow! Beautifull pets..");
  }
}


// ****************************Q:9*****************************



for(var i= 1; i <=10;i++ ){
    alert("It should be "+ i + " ." )
}


// ****************************Q:10*****************************



var userName = prompt("What is your Name??");

var arr = ["Raza", "Ali", "Shakoor", "Abdul", "Anas"];

var nameFound = false;

for (var i = 0; i <= arr.length; i++) {
  if(userName===arr[i]){
    var nameFound = true;
  }
}

if (userName ===arr[0] ) {
  alert("Enter..");
}

else if (userName ===arr[1] ) {
  alert("Enter..");
}
else if (userName ===arr[2] ) {
  alert("Enter..");
}
else if (userName ===arr[3] ) {
  alert("Enter..");
}
else if (userName ===arr[4] ) {
  alert("Enter..");
}




else
 {alert ("Please write correct user name") }






// ****************************Q:11*****************************

var userInput2 = prompt("Enter your age")

var list = ["18","19","20","21","22","23"]

var matchFound = false;
for (var i = 0; i < list.length; i++) {
    if (userInput2 === list[i]) {
        alert("Match found");
        matchFound = true;
        break;
    }
}
if (!matchFound) {
  alert("Match not found");
}



// ****************************Q:12*****************************





var firstArr = ["a","b","c","d","e","f"]; 
var secondArr = [1,2,3,4,5,6]; 

var result = ""



for (var i = 0; i <= firstArr.length; i++) {
 
  
  for (var k = 0; k <= secondArr.length; k++) {
    

     result += firstArr[i] + secondArr[k]

  }


}

document.write(result + "<br>")


























