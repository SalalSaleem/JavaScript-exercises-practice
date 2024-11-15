

//// chapter 12 to 13 ////

// 1 //

// var value = prompt();

// if(value >= "A" && value <= "Z"){
//     alert(value + " is a Capital alphabetical character")
// }
// else if(value >= "a" && value <= "z"){
//     alert(value + " is a small alphabetical character")
// }else{
//     alert(value + " is not a alphabetic")
// }

// 2 //

// var value1 = +prompt("first integar",3)
// var value2 = +prompt("second integar",6)

// if(value1 > value2){
//     alert(value1 + " is the larger");
// }else if(value2 > value1){
//     alert(value2 + " is the larger");
// }else{
//     alert("both " + value1 + " and " + value2 + " are equals");
    
// }

// 3 //

// var value = +prompt("enter a number to check wheter its a postive , negetive or zero?")

// if(value >= 1 && value <= 99999999999999999){
//     alert(value + " is a positive number");
// }else if(value <= -1 && value >= -99999999999999999){
//     alert(value + " is a negetive number");
// }else{
//     alert(value + " is zero")
// }

// 4 //

// var value = prompt("enter a letter to check wheter its vowel or not")

// if(value === "a" || value === "e" || value === "i" || value === "o" || value === "u"){
//     alert(value + " is a vowel");
// }else{
//     alert(value + " is not a vowel")
// }


// 5 //

// var pass = prompt("create a password");
// var confPass = prompt("confirm your password");

// if(confPass.length === 0){
//     alert("Please enter your password")
// }else{
//     if(pass === confPass){
//         alert("Correct! The password you entered matches the original password")
//     }else{
//         alert("Incorrect password")
//     }
// }

// 6 //

// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// }
// else{
// greeting = "Good evening";
// }

// alert(greeting)

// 7 //

// var value = prompt("enter your time",1400);

// if(value >= 0000 && value < 1200){
//     alert("good morning!")
// }else if(value >= 1200 && value < 1700){
//     alert("good afternoon!")
// }else if(value >= 1700 && value < 2100){
//     alert("good evening!")
// }else if(value >= 2100 && value < 2359){
//     alert("good night!")
// }

//// chapter 14 to 16 ////

// 1 //

// var arr = [];

// 2 //

// var arr = [];

// 3 //

// var arr = ["salal","ali","sameer"];

// 4 //

// var arr = [2,4,3,5];

// 5 //

// var arr = [true , false];

// 6 //

// var arr = ["name",true,42];

// 7 //

// var education = ["SSC ", "HSC", "BCS","BS", "BCOM", "MS", "M. Phil", "PhD"]

// document.write("<h2>Qualifications :</h2>" + "<br/>" 
//     + "1) " + education[0] + "<br/>" 
//     + "2) " + education[1] + "<br/>"
//     + "3) " + education[2] + "<br/>"
//     + "4) " + education[3] + "<br/>"
//     + "5) " + education[4] + "<br/>"
//     + "6) " + education[5] + "<br/>"
//     + "7) " + education[6] + "<br/>"
//     + "8) " + education[7] + "<br/>"
// )

// 8 //

// var students = ["jhon","tony","thomas"];
// var score = [340,482,270];
// var total = 500;

// document.write(
//     "score of " + students[0] + " is " + score[0] + ". Percentage:" + score[0]/500*100 + "%" + "<br/>" +
//     "score of " + students[1] + " is " + score[1] + ". Percentage:" + score[1]/500*100 + "%" + "<br/>" +
//     "score of " + students[2] + " is " + score[2] + ". Percentage:" + score[2]/500*100 + "%" + "<br/>"
// )

 // 9 //

// var colors = ["red","orange","black"];
// document.write(colors + "<br>");

// var first = prompt("what color you want to add to the beginning")
// colors.unshift(first);
// document.write("a"+"<br/>" +colors + "<br>")

// var last = prompt("what color you want to add to the end")
// colors.push(last);
// document.write("b"+"<br/>" +colors + "<br>")

// colors.unshift("green","navy blue")
// document.write("c"+"<br/>" +colors + "<br>")

// colors.shift();
// document.write("d"+"<br/>" +colors + "<br>")

// colors.pop();
// document.write("e"+"<br/>" +colors + "<br>")

// var indexAdd = +prompt("at which index you wants to add a color")
// var colorAdd = prompt("Color name")
// colors.splice(indexAdd,0,colorAdd);
// document.write("f"+"<br/>" +colors + "<br>")

// var indexDlt = +prompt("at which index you wants to delete a color(s)")
// var colorsDlt = +prompt("How many Colors?")
// colors.splice(indexDlt,colorsDlt);
// document.write("g"+"<br/>" +colors + "<br>")

// 10 //

// var scores = [320,201,420,920];
// document.write("Scores of students "+scores +"<br/>");

// document.write("Ordered Scores of students "+scores.sort())

// 11 //

// var cities = ["karachi","lahore","multan","peshawar","islamabad"];
// document.write("cities list :" + "<br/>" + cities + "<br/>")

// document.write("Selected cities list :" + "<br/>" + cities.slice(2,4))

// 12 //

// var arr = ["This", " is ", " my", " cat"]
// document.write("array : "+ "<br/>" + arr + "<br/>")
// document.write("string : "+ "<br/>" + arr.join(" ",","))

// 13 //

// var arr = ["keyboard","mouse","printer","monitor"];
// document.write("Devices:" + "<br/>" + arr + "<br/>" + "<br/>")
// document.write(
//     "Out:" + "<br/>" + arr[0] + "<br/>" + 
//     "Out:" + "<br/>" + arr[1] + "<br/>" +
//     "Out:" + "<br/>" + arr[2] + "<br/>" +
//     "Out:" + "<br/>" + arr[3] 

// )

// 14 //

// var arr = ["keyboard","mouse","printer","monitor"];
// document.write("Devices:" + "<br/>" + arr + "<br/>" + "<br/>")
// document.write(
//     "Out:" + "<br/>" + arr[3] + "<br/>" + 
//     "Out:" + "<br/>" + arr[2] + "<br/>" +
//     "Out:" + "<br/>" + arr[1] + "<br/>" +
//     "Out:" + "<br/>" + arr[0] 

// )

// 15 //

// var arr = ["Apple","Samsung", "Motorola", "Nokia", "Sony" , "Haier"];

// document.write(`<select><option>${arr[0]}<option>${arr[1]}<option>${arr[2]}<option>${arr[3]}<option>${arr[4]}<option>${arr[5]}</select>`)

//// chapter 17 to 20 ////

// 1 //

// var arr = [[]];

// 2  //

// var arr = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];

// document.write(arr[0]+"<br/>"+arr[1]+"<br/>"+arr[2])

// 3 //

// for(var i = 0 ; i <11 ; i++){
//     document.write(i + "<br/>")
// }

// 4 //

// var value = +prompt("table",7)
// var length = +prompt("length",10);

// for(var i = 1 ; i <= length ; i++){
//     document.write(value + " x " + i + " = " + value*i + "<br/>")
// }

// 5 //

// var fruits = ["apple", "banana", "mango", "orange","strawberry"];

// for(var i = 0 ; i<fruits.length ; i++){
//     document.write(fruits[i] + "<br/>")
// }
// document.write(
//     "<br/> element at index 0 is " + fruits[0] + "<br/>" +
//     "element at index 1 is " + fruits[1] + "<br/>" +
//     "element at index 2 is " + fruits[2] + "<br/>" +
//     "element at index 3 is " + fruits[3] + "<br/>" +
//     "element at index 4 is " + fruits[4] + "<br/>" 

// )

// 6 //

// a //

// for(var i = 1 ; i <16 ; i++){
//     document.write(i + ",")
// }

// b //

//  for(var i = 10 ; i >0 ; i--){
//      document.write(i + ",")
//  }

// c //

// for(var i = 0 ; i <21 ; i = i+2){
//     document.write(i + ",")
// }

// d //

// for(var i = 1 ; i <20 ; i = i+2){
//     document.write(i + ",")
// }

// e //

// for(var i = 2 ; i <21 ; i = i+2){
//     document.write(i + "k,")
// }

// 7 //

// var a = ["cake", "apple pie", "cookie", "chips", "patties"]
// var userSearch = prompt("Welcome to ABC bakery. What do you want to order sir/ma'am?");
// var flag = false
// for(var i = 0 ; i <a.length ; i++){
//     if(userSearch === a[i]){
//         flag=true;
//         document.write(userSearch + " is available at index " + i + " in our Bakery")   
//     }
// }
//  if(flag === false){
//     document.write("we are sorry. "+userSearch + " is not available in our Bakery")
// }

// 8 //

// var a = [24, 53, 78, 91, 12];
// var value = 0;

// for(var i = 0 ; i < a.length ; i++){
//     if(a[i] > value){
//         value = a[i]
//     }
// }

// document.write("array items: " + a + "<br/>" + "the largest number is " + value)

// 9 //

// var a = [24, 53, 78, 91, 12];
// var value = a[0];

// for(var i = 0 ; i < a.length ; i++){
//     if(value > a[i]){
//         value = a[i]
//     }
// }

// document.write("array items: " + a + "<br/>" + "the smallest number is " + value)

// 10 //

// for(var i = 5 ; i < 101 ; i = i+5){
//     document.write(i + ",")
// }

