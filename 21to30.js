/// chapter 21 to 25 ///

// 1 //

// var first = prompt("enter your first name")
// var last = prompt("enter your last name")
// var full = first+" "+last;

// alert("Welcome dear " + full)

// 2 //

// var mobile = prompt("enter your s favorite mobile phone model")
// var result = document.write("my favorite phone is : "+mobile + "<br/>"+"length of string : "+mobile.length)

// 3 //

// var value = "Pakistani";
// document.write("string: "+value + "<br/>"+"index of 'n' : " + value.indexOf("n"))

// 4 //

// var a = "Hello World";
// document.write("string : "+a + "<br/>"+ "last index of 'I' : " + a.lastIndexOf("l"))

// 5 //

// var a = "Pakistani";
// document.write("String : " + a + "<br/>" + "Character at index 3 : " + a.charAt(3))

// 6 //

// var first = prompt("enter your first name")
// var last = prompt("enter your last name")
// var full = first.concat( last);

// alert("Welcome dear " + full)

// 7 //

// var value = "hyderabad";
// var updatedValue = value.replace("hyder","islam");

// document.write("City : " + value + "<br/>" + "after replacement : " + updatedValue)

// 8 //

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var result = message.replace(/and/g,"&");

// document.write("Before : "+message + "<br/>" + "After : " + result)

// 9 //

// var str = "472";
// var nbr = parseInt(str) 
// document.write("Value : " + str + "<br/>" + "Type : " + typeof(str)+"<br/>"+"Value : " + nbr + "<br/>" + "Type : " + typeof(nbr))

// 10 //

// var value = prompt("anything")
// var result = value.toUpperCase();

// document.write("User input : " + value + "<br/>" + "Upper Case : " + result)

// 11 //

// var value = prompt("anything");
// var first = value.slice(0,1).toUpperCase();
// var last = value.slice(1);
// document.write(first + last)

// 12 //

// var num = 35.36;
// document.write(num.toString().replace(".",""))

// 13 //

// var username = prompt("create a username");

// if(username.includes("@") || username.includes(".") || username.includes(",") || username.includes("!")){
//     alert("Please enter a valid username")
    
// }else{
//     alert("username created !")
    
// }

// 14 //

// var a = ["cake", "apple pie", "cookie", "chips", "patties"];

// var userInput = prompt("Welcome sir what do you want to order?");

// if(a.includes(userInput)){
//     alert(userInput + " is available at index " + a.indexOf(userInput) + " in our bakery")
    
// }else{
//     alert("We are sorry. " + userInput + " is not avaialble in our bakery");
// }

// 15 //

// var password = prompt("create a password");
// var regex = /^[0-9]+$/ ;

// var checker = regex.test(password[0]);

// if(!checker){
//     var regex = /^[0-9]+$/ ;
//     var checkernum = regex.test(password);
//     var regex = /^[a-z, A-Z]+$/ 
//     var checkAlpha = regex.test(password);
//     console.log("num checker",checkernum);
//     console.log("alpha checker",checkAlpha);
    
//     if(checkernum && checkAlpha){
//         console.log("yes pass is consist of numbers and alpha");
//     }else{
//         console.log("pass must contain numbers and alpha");
        
//     }
    
// }else{
//     console.log("password must not begin with number");
// }


// 16 //

// var university = "University of Karachi".split("");

// for(var i = 0 ; i < university.length ; i++){
//     document.write(university[i]+"<br>");   
// }

// 17 //

// var userInput = prompt("enter any word")
// console.log("last is " , userInput.charAt(-1));

// 18 //




//////// chapter 26 to 30 ////////

// 1 //

// var a = +prompt("enter a number with points",4.340);

// var no = a ;
// var rndOff = Math.round(a);
// var flr = Math.floor(a);
// var cel = Math.ceil(a);

// document.write(
//     "Number : " + no + "<br>" +
//     "RoundOff : " + rndOff + "<br>" +
//     "Floor : " + flr + "<br>" +
//     "Ceil : " + cel + "<br>" 

// )


// 2 //

// var a = +prompt("enter a negetive number with points",-4.340);

// var no = a ;
// var rndOff = Math.round(a);
// var flr = Math.floor(a);
// var cel = Math.ceil(a);

// document.write(
//     "Number : " + no + "<br>" +
//     "RoundOff : " + rndOff + "<br>" +
//     "Floor : " + flr + "<br>" +
//     "Ceil : " + cel + "<br>" 

// )

// 3 //

// var a = +prompt("enter any number",-5);

// alert("absolute value of " + a + " is " + Math.abs(a))
 

// 4 //

// var a = Math.floor(Math.random()*10);

// document.write(a)

// 5 //

// var a = Math.round(Math.random());

// if(a === 0){
//     alert("heads")
// }else{
//     alert("tails")
// }


// 6 //


// var a = Math.floor(Math.random()*100);

// document.write(a)


// 7 //

// var userInput = +prompt("enter your weight",56.3);

// document.write("The weight of user is " + parseFloat(userInput))


// 8 //

// var random = Math.floor(Math.random()*10);
// var userInput = +prompt("guess the number",5);

// if(userInput===random){
//     alert("congratulations ! You guessed the correct number");
// }else{
//     alert("try again");
    
// }






































































