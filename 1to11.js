/// chapter 1 ///

// 1 //

// alert("welcome")

// 2 //

// alert("Error ! Please Enter a Valid password.")

// 3 //

// alert("welcome to js land... \n happy coding !")

// 4 //

// alert("welcome to js land")
// alert("happy coding")

/// chapter 2 /// 

// 1 //

// var username;

// 2 // 

// var myName = "salal"

// 3 //

// var message = "Hello World";

// alert(message)

// 4 //

// var name = "ali";
// var age = 15;
// var course = "Web & App";

// alert(name)
// alert(age)
// alert(course)

// 5 //

// alert(" pizza \n pizz \n piz \n pi \n p")

// 6 //

// var email = "example@mail.com";

// alert("my email address is " + email)

// 7 //

// var book = "a smarter way to learn javascript";

// alert("I am trying to learn from " + book)

// 8 //

// document.write("Yeah ! I can write HTML content through javascript")

// 9 //

// var a = "▶︎ •၊၊||၊|။||||။‌‌‌‌‌၊|• 0:10";

// alert(a)

/// chapter 3 ///

// 1 //

// var age = 16;

// alert("I am " + age + " years old")

// 2 //

// var a = "You have visited this website 17 times";

// alert(a)

// 3 //

// var birthYear = 1990;
// var type = typeof(birthYear);

// alert(" My BirthYear is " + birthYear +  " \n data type of my birthyear is " + type)

// 4 //

// var name = "ali";
// var product = "Books";
// var quantity = 4;

// document.write(name + " Ordered " + quantity +" "+ product + " on XYZ clothing Store")

/// chapter 4 ///

// 1 //

// var a = 1 ,  b = 2 , c = 3;

// 2 //

// legal

// var name = "1"
// var name1 = "1"
// var nameLast = "1"
// var nam_e = "1"
// var $name = "1"

// illegal 

// var 1name = "1"
// var name@ = "1"
// var name+last = "1"
// var name?last = "1"
// var name last = "1"

// 3 //

// document.write("rules for naming JS Variables" + "<br>" +  "<br>" + "Variable names can only contain Numbers , $ and _ , For Example : $my_1stVariable"
// + "<br>"+ "Variables must begin with a letter, _ For example $name, _name or name"
// + "<br>"+ "Variable names are case sensitive."
// + "<br>"+ "Variable names should not be JS keywords"
//  );


/// chapter 5  ///

// 1 //

// var a = +prompt("first number",3);
// var b = +prompt("second number",7);
// var result = a+b;
// document.write("Sum of " + a +" and " + b + " = " + result)

// 2 //

// var a = +prompt("first number",3);
// var b = +prompt("second number",7);
// var result = a-b;
// document.write("Sum of " + a +" and " + b + " = " + result)

// 2 //

// var a = +prompt("first number",3);
// var b = +prompt("second number",7);
// var result = a*b;
// document.write("Sum of " + a +" and " + b + " = " + result)

// 2 //

// var a = +prompt("first number",3);
// var b = +prompt("second number",7);
// var result = a/b;
// document.write("Sum of " + a +" and " + b + " = " + result)

// 3 //

// var a ;

// document.write("value after declaration is " + a);

// a = 5;

// document.write("<br>"+"initial value is " + a);

// a++;

// document.write("<br>"+"value after increament " + a);

// a = a+7;

// document.write("<br>"+"value after adding 7 is " + a);

// a--;

// document.write("<br>"+"value after decrement " + a);


// a = a/3;

// document.write("<br>"+"value after dividing with 3 is " + a);


// 4 //

// var cost = 500;

// document.write("cost of buying 5 movie ticket is " + cost*5)

// 5 //

// var value = +prompt("enter any number for table",5);

// document.write(
//     value + " x 1 = " + value*1 + "<br>" +
//     value + " x 2 = " + value*2 + "<br>" +
//     value + " x 3 = " + value*3 + "<br>" +
//     value + " x 4 = " + value*4 + "<br>" +
//     value + " x 5 = " + value*5 + "<br>" +
//     value + " x 6 = " + value*6 + "<br>" +
//     value + " x 7 = " + value*7 + "<br>" +
//     value + " x 8 = " + value*8 + "<br>" +
//     value + " x 9 = " + value*9 + "<br>" +
//     value + " x 10 = " + value*10 + "<br>" 
// )

// 6 //

// var c = 35;
// var f = 104;
// var cel = (f - 32)* 5/9 ;
// var far = (c * 9/5 ) + 32;


// document.write(c + " C is " + far + " F" + "<br>" + f + " F is " + cel + " C")

// 7 // 


// var price1 = 200;
// var price2 = 400;
// var quantity1 = 5;
// var quantity2 = 9;
// var shipping = 100;
// var total = price1*quantity1+price2*quantity2+shipping;

// document.write("Price of Item 1 Is " + price1 + "<br>" +
//     "Quanitity of Item 1 Is " + quantity1 + "<br>" +
//     "Price of Item 2 Is " + price2 + "<br>" +
//     "Quantity of Item 2 Is " + quantity2 + "<br>" +
//     "Shipping cost Is " + shipping + "<br>" + "<br>"+
//     "Total cost of your order is " + total
// )

// 8 //

// var total = 900;
// var obt = 732;
// var perc = obt/total*100;

// document.write("<h2>Marks Sheet</h2>" + "<br>"+"<br>"+ "Total Marks : " + total +"<br>" +"obtained Marks : " + obt + "<br>" + "Percentage : " + perc + "%") 

// 9 //

// var us = 10;
// var riyal = 25;

// var pkr = 104.80*us+28*riyal;

// document.write("<h2>Currency In PKR</h2>" + "<br>" + "Total Currency in pkr is " + pkr)

// 10 //

// var a = 10;
// var res = a+5*10/2;

// console.log(res)

// 11 //

// var birthYear = 1990;
// var currentYear = 2024;
// var age = currentYear-birthYear;

// document.write("<h3>Age Calulator</h3>" + "<br>" + "Current Year " + currentYear + "<br>" + "Birth Year " + birthYear + "<br>" + "Your Age is " + age)


// 12 //

// skipped


// 13 //

// var fav = "choco";
// var age = 28;
// var maxAge = 95;
// var perDay = 4;

// var res = maxAge-age;

// document.write("Fav Snack " + fav + "<br>"+
//     "Current Age " + age + "<br>"+
//     "Max Age " + maxAge + "<br>"+
//     "Amount of snacks per day " + perDay + "<br>"+
//     "Your Will need " + res +" choco to last you untill " + maxAge
// )
// console.log(res*perDay)


/// chapter 6-9 ///

// 1 //

// var a = 10;
// document.write("The Value of a is : " + a + "<br>");
// ++a 
// document.write("The Value of ++a is : " + a + "<br>");
// document.write("Now The Value of a is : " + a + "<br>");
// a++ 
// document.write("The Value of a++ is : " + a + "<br>");
// document.write("Now The Value of a is : " + a + "<br>");
// a-- 
// document.write("The Value of a-- is : " + a + "<br>");
// document.write("Now The Value of a is : " + a + "<br>");
// --a 
// document.write("The Value of --a is : " + a + "<br>");
// document.write("Now The Value of a is : " + a + "<br>");

// 2 //

// var a = 2, b = 1;

// var z = --a;
// document.write("--a is "+ z + "<br>")
// var c = --a - --b;
// document.write("--a - --b is "+ c + "<br>")
// var d = --a - --b + ++b;
// document.write("--a - --b + ++b is "+ d + "<br>")
// var e = --a - --b + ++b + b--;
// document.write("--a - --b + ++b + b-- is "+ e + "<br>")


// 3 //

// var name = prompt("what is your name?");

// alert(name + " Welcome !")

// 5 //

// var value = +prompt("enter any number",5);

// document.write(
//     value + " x 1 = " + value*1 + "<br>" +
//     value + " x 2 = " + value*2 + "<br>" +
//     value + " x 3 = " + value*3 + "<br>" +
//     value + " x 4 = " + value*4 + "<br>" +
//     value + " x 5 = " + value*5 + "<br>" +
//     value + " x 6 = " + value*6 + "<br>" +
//     value + " x 7 = " + value*7 + "<br>" +
//     value + " x 8 = " + value*8 + "<br>" +
//     value + " x 9 = " + value*9 + "<br>" +
//     value + " x 10 = " + value*10 + "<br>" 

// )


// 6 //

// var sub1 = prompt("enter first subject")
// var sub2 = prompt("enter second subject")
// var sub3 = prompt("enter third subject")
// var obt1 = +prompt("Obtained marks of subject 1")
// var obt2 = +prompt("Obtained marks of subject 2")
// var obt3 = +prompt("Obtained marks of subject 3")
// var total = 100;
// obtTotal = obt1+obt2+obt3;

// document.write("<table><tr><td>Subject</td><td>Total Marks</td><td>Obtained Marks</td><td>Percentage</td></tr><tr><td>"+sub1 +"</td><td>"+total+"</td><td>"+obt1+"</td><td>"+obt1/total*100+"</td></tr><tr><td>"+sub2 +"</td><td>"+total+"</td><td>"+obt2+"</td><td>"+obt2/total*100+"</td></tr><tr><td>"+sub3 +"</td><td>"+total+"</td><td>"+obt3+"</td><td>"+obt3/total*100+"</td></tr><tr><td></td><td>"+total*3+"</td><td>"+obtTotal+"</td><td>"+obtTotal/300*100+"</td></tr></table>")

/// chapter 9-11 ///

// 1 //

// var value = prompt("enter your city","karachi");

// if(value==="karachi"){
//     alert("welcome to the city of Lights !")
// }

// 2 //

// var value = prompt("gender?");

// if(value==="male"){
//     alert("good morning Sir !")
// }else if(value === "female"){
//     alert("Good Morning Ma'am !")
// }


// 3 //

// var value = prompt("signal color","red");

// if(value==="red"){
//     alert("Must Stop")
// }if(value==="yellow"){
//     alert("Ready to move")
// }if(value==="green"){
//     alert("Move now")
// }


// 4 //

// var value = prompt("remaining fuel?",0.24);

// if(value<0.25){
//     alert("Please refill the fuel in your car")
// }


// 5 //

//  var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// ans = given condition for variable a is true

// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// } 

// ans = nothing happened 

//  var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }

// ans = condtion 2 is true
        //  condtion 4 is true 

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
//  if (true){
// alert("True")}
// if (false){
// alert("False");
// }

// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }

// // ans = the cost is equals 
//         // true
//         // car is smaller than cat


// 6 //

// var obt1 = +prompt("subject 1 marks?",60);
// var obt2 = +prompt("subject 2 marks?",50);
// var obt3 = +prompt("subject 3 marks?",80);
// var total = +prompt("Total marks?",300);
// var marksObt = obt1+obt2+obt3;
// var perc = marksObt/total*100;
// var grade = "";
// var remarks = ""; 

// if(perc >= 80){
//     grade = "A-one";
//     remarks = "Excellent"
//     document.write("<h2>Marks Sheet</h2></br>"+"Total Marks : " + total + "</br>" + "Marks Obtained : " + marksObt + "</br>" + "Percentage : " + perc + "%" + "<br/>"+"Grade : " + grade + "<br/>" + "Remarks : " + remarks)
// }
// else if(perc >= 70){
//     grade = "A";
//     remarks = "Good";
//     document.write("<h2>Marks Sheet</h2></br>"+"Total Marks : " + total + "</br>" + "Marks Obtained : " + marksObt + "</br>" + "Percentage : " + perc + "%" + "<br/>"+"Grade : " + grade + "<br/>" + "Remarks : " + remarks)
// }
// else if(perc >= 60){
//     grade = "B";
//     remarks = "You need to Improve";
//     document.write("<h2>Marks Sheet</h2></br>"+"Total Marks : " + total + "</br>" + "Marks Obtained : " + marksObt + "</br>" + "Percentage : " + perc + "%" + "<br/>"+"Grade : " + grade + "<br/>" + "Remarks : " + remarks)
// }
// else if(perc < 60){
//     grade = "Fail";
//     remarks = "Sorry";
//     document.write("<h2>Marks Sheet</h2></br>"+"Total Marks : " + total + "</br>" + "Marks Obtained : " + marksObt + "</br>" + "Percentage : " + perc + "%" + "<br/>"+"Grade : " + grade + "<br/>" + "Remarks : " + remarks)
// }

// 7 // 

// var secret = 4;
// var userInput = +prompt("guess the secret number");

// if(secret === userInput){
//     alert("bingo ! Correct Answer")    
// }else if(userInput+1 === secret){
//     alert("Close Enough to the correct answer")
// }


// 8 // 

// var value = +prompt("check is the number is divisible by 3 or not",3);
// var result = value%3;

// if(result === 0){
//     alert("the number is divisible by 3")
// }

// 9 //

// var value = +prompt("check is the number is even or odd");
// var even = value%2;

// if(even === 0){
//     alert("the number is even")
// }
// else{
//     alert("the number is odd")
// }

// 10 //

// var temp = +prompt("temperature?");

// if(temp > 40){
//     alert("It is too hot outside.")
// }
// else if(temp > 30){
//     alert("The Weather today is Normal.")
// }
// else if(temp > 20){
//     alert("Today’s Weather is cool.")
// }
// else if(temp > 10){
//     alert("OMG! Today’s weather is so Cool.")
// }


// 11 //

// var firstNumber = +prompt("enter first number",3)
// var secondNumber = +prompt("enter second number",5)
// var operation = prompt("enter operation","+");
// var result ;
// if(operation === "+"){
//     result = firstNumber + secondNumber    
// }else if(operation === "-"){
//     result = firstNumber - secondNumber    
// }else if(operation === "*"){
//     result = firstNumber * secondNumber    
// }else if(operation === "/"){
//     result = firstNumber / secondNumber    
// }

// alert(result)