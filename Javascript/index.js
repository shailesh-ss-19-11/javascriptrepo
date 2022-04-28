console.log("happy happy");

// var first_name = "jitendra";
// var last_name = "pardhi";
// var id ="12345";
// var id=12345;
// var user=[
//     {
//         name:"shailesh",
//         age:22,
//         area:"nagpur"
//     },
//     {
//         name:"jitendra",
//         age:22,
//         area:"nagpur"
//     },
//     {
//         name:"jitendra",
//         age:22,
//         area:"nagpur"
//     }
// ];

// let first_name = "shailesh";
// console.log(first_name);

// first_name ="asdlkhaskdjh";
// console.log(first_name);

// true and false

// const first_name ="shailesh";
// console.log(first_name);

// first_name="jitendra";

// document.write("firstname");
// function clickme(){
//     document.write(user)
// }

// Operators//////////////////////

// arithmatic operator
// logical operator
// relational operator
// ternary operator
// conditional operator

// let num1 = 10;
// let num2 = 10;

// console.log(num1+num2);
// console.log(num1-num2);
// console.log(num1/num2);
// console.log(num1*num2);
// console.log(num1%num2);

// // true / false
// // yes  / no
// // 1   /  0

// console.log(num1 == 10 && num2==10);  // both conditions are true then true otherwie false

// console.log(num1 == 20 || num2==20); //both conditions are false then false otherwie true

// console.log( num1 != 20);

// console.log( num1 != 10 ? "hai" : "nahi hai");

// console.log(num1>num2);
// console.log(num1<num2);
// console.log(num1===num2);
// console.log(num1<=num2);
// console.log(num1>=num2);
// console.log(num1!=num2);

// consditional statements

// if-else
// for loop
// foreach
// switch
// while loop
// do-while-loop

// if(num1>10){
//     console.log("num1 is greater");
// }
// else{
//     console.log("num1 is small");
//     num1=20;
//     console.log(num1);
// }
// startpoint----->endpoint--->increment/decrement

//     for (let i=0;          i<1;           i++){
//     console.log(i);
// }
// for ( ;true; ) {
//     console.log("true");
//  }

// let i=0;
// while(i<=10){
//     console.log(i*5);
//     i++;
// }

// i=1;
// do{
//     console.log(i);
//     i++;
// }while(i<10);

// string ////////////////////////////////////////

// collection of aphabets words

// const name = "shailesh";
// const lastname="gokhale";

// name="gokhale";
// console.log(name);

// console.log(name.length);

// console.log(name.replace("shailesh","gokhale"));

// console.log(name.slice());

// for(let i=0;i<name.length;i++){
//     console.log(name[i]);
// }

// console.log(name.toUpperCase());
// // console.log(name.isEqual(lastname));

// function clickme(){
//     alert(name.toUpperCase());
// }

// function check_Equal(str,str1){
//    alert(str==str1);
// }

// check_Equal(name,lastname);
// const number=5;

// switch(number){
//     case 1:
//         console.log("one");
//         break;
//     case 2:
//         console.log("two");
//         break;
//     case 3:
//         console.log("three");
//         break;
//     case 4:
//         console.log("four");
//         break;
//     case 5:
//         console.log("five");
//         break;
//     case 6:
//         console.log("six");
//         break;
//     case 7:
//         console.log("seven");
//         break;
//     case 8:
//         console.log("Eight");
//         break;
//     case 9:
//         console.log("nine");
//         break;
//     case 10:
//         console.log("ten");
//         break;
//     default:
//         console.log("no number found");
// }

// Array methods

// const user=["shailesh","jitendra","Abhay","prajyot","Abhi","tushar"];
// console.log(user);
// console.log(user.pop());
// console.log(user);
// user.push("pranali");
// console.log(user);
// // const pop_value=user.pop();
// // console.log(user);

// const family=[];
// family.push("mom","shailesh","shailesh","jitendra","Abhay","prajyot","Abhi","tushar");
// console.log(family);
// console.log(family.shift());
// console.log(family.unshift());

// const users=[
//     {
//         id:1,
//         name:"shailesh",
//         address:"nagpur"
//     },
//     {
//         id:2,
//         name:"jitendra",
//         address:"nagpur"
//     },
//     {
//         id:3,
//         name:"Abhay",
//         address:"nagpur"
//     },
//     {
//         id:4,
//         name:"prajyot",
//         address:"nagpur"
//     },
//     {
//         id:5,
//         name:"Abhi",
//         address:"nagpur"
//     },

// ];

// // console.log(user);

// for(let i=0;i<users.length ;i++)
//   {

//         const user=users[i];
//         const id=user.id.toString();
//         const name=user.name.toUpperCase();
//         console.log(`my name is ${name} and my id is ${id}`);
//   }

// const users1=["shailesh","jitendra","Abhay","prajyot","Abhi","tushar"];
// const users3=["good","job"];
// const users4=["good","job"];
// const users5=["good","job"];
// users1.push("vinay");
// const shift_user=user.shift();
// console.log(`my removed item is ${shift_user}`);

// first way of cloning
// const users2 = users1;
// console.log(users2===users1);

// second way of cloning
// let users2 =users1.slice(0);
// console.log(users2);

// second way of cloning
// let users2 =[].concat(users1);
// console.log(users2===users1);

// let users2 = [...users1,...users3,...users4,...users5];
// console.log(users2);

// const users=["shailesh","jitendra","Abhay","prajyot","Abhi","tushar"];

// for of loop
// for in loop
// for(let i=0; i<users.length;i++){
//     console.log(users[i].toUpperCase());
// }

// let users2=[];
// for(let user of users){
//     users2.push(user.toUpperCase());
// }
// console.log(users2);

// let users2=[];
// for(let index in users){
//     users2.push(users[index].toUpperCase());
// }
// console.log(users2);

// object ////////////////////////////////////////////////
// object reference tyype
// arrays is sufficient
// real world data
// key:value pairs
// object does not have index

// creating an object

// const user ={
//     name:"shailesh",
//     age:22,
//     cities:["balaghat","nagpur","raipur","bundelkhand"]
// };
// console.log(user);

// // accessing object data
// console.log(user.name);
// console.log(user.age);
// console.log(user.cities[0]);

// // inserting the element in object

// user.gender="male";
// console.log(user);

// for(let key in user){
//     console.log(`${key}: ${user.cities[key]}`);
//     console.log(key, " : " ,user[key]);
// }
// 0,1,2,3,4,5
// const numbers=[7,8,9,5,4,5]
// for(let i in numbers){
//     console.log(numbers[i]);
// }

// for (let i=0; i<numbers.length;i++){
//     console.log(numbers);
// }

// console.log("hello my dear friend tushar");
// console.log("hello my dear friend tushar");
// console.log("hello my dear friend tushar");
// console.log("hello my dear friend tushar");
// console.log("hello my dear friend tushar");
// console.log("hello my dear friend tushar");

// function printmyname(){
//     for(let i=0;i<10;i++){
//         console.log("hello my dear friend tushar")
//     }
// }
// printmyname();

// function add(num1,num2){
//     return num1+num2;
// }
// const return_value=add(10,20);
// console.log(return_value);

// function isEven(i){
//     if (i%2==0){
//         return "Even"
//     }
//     else{
//         return "odd"
//     }
// }
// console.log(isEven((4/2)*2));

// name="shailesh";
// function findfirstChar(){
//     return name.slice(0,5);
// }
// console.log(findfirstChar());

// myarray=[1,2,5,7,6,4,3];
// function findTarget(arr,target){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]===target){
//             console.log(`number found at position ${i} and the targeted number is ${target}`);
//         }
//     }
// }
// console.log(findTarget(myarray,4));

// function myFriendsBirthdays(){
//     console.log("hello my dear friend tushar's birthday on 25 july");
//     console.log("hello my dear friend shailesh birthday on 26 july");
//     console.log("hello my dear friend prajyot birthday on 27 july");
// }

// myFriendsBirthdays();

// function addTwonumbers(num1,num2){
//     return num1+num2;
// }
// const return_value=addTwonumbers(20,20);
// console.log(return_value);

// function isEven(num){
//     if (num%2==0){
//         return true;
//     }else{
//         return false;
//     }
// }

// console.log(isEven(2));

// function findfirstChar(name){
//     return name[0];
// }
// console.log(findfirstChar("shailesh"));

// const myarray=[1,2,3,4,5,6,7,8,9];
// function findElement(){
//     for(let i=0;i<myarray.length;i++)
//     {
//         console.log(myarray[i]);
//     }
// }
// findElement();

// const hello = function(){
//     console.log("hello");
// }
// hello();

// const add = function(num1,num2){
//         return num1+num2;
//     }
// console.log(add(20,20));

// const isEven= function(num){
//         if (num%2==0){
//             return "even";
//         }else{
//             return "odd";
//         }
//     }
//     console.log(isEven(5))

// myname="jitenra pardhi"

// function story(name){
//     return name[0];
// }
// console.log(story(myname));

// const story= function(jitedra){
//     console.log(jitedra[0]);
// }
// story(myname)

// y=[1,2,3,4,5,6,7,8,9,10];

// const findElement = function(myarray,target){
//     for(let i=0;i<myarray.length;i++)
//     {
//         if(myarray[i]==target){
//             return i;
//         }
//     }
//     return -1;
// }
// console.log(findElement(y,7));

// const findelement= function(myarray,i){
//     for( let index of myarray){
//         if(index == i){
//             return true;
//         }
//     }
// }
// console.log(findelement(y,50));

// const hello =() =>{
//     console.log("hello");
// }

// hello();

// const findElement = (myarray,target) => {
//     for(let i=0;i<myarray.length;i++)
//     {
//         if(myarray[i]==target){
//             return i;
//         }
//     }
//         return -1;
//     }
//     console.log(findElement(y,7));

// console.log(isEven(50));

// function isEven(i){
//         return i%2==0;
// }

// const isEven = function(i){
//         return i%2==0;
// }

// const isEven = i => i%2==0;

// write a program to revers the array
// let arr=[1,2,3,4,5,6];
// const revArray = a => a.reverse();
// console.log(revArray(arr));

// let arr1=[1,2,3,4,5,6];
// const revArray =(arr) =>{
//     for (var i = arr.length - 1; i >= 0; i--) {
//         console.log(arr[i]);
//     }
// }
// revArray(arr1);

// const app =function(){

//     const myfunc= () => {
//         console.log("hellow my dear friends do practice for become a developer");
//     }

//     const addTwonumbers = (num1,num2) =>{
//         return num1+num2;
//     }

//     const multiplication = (num1,num2) =>{
//         return num1*num2;
//     }
//     myfunc();
//     console.log(addTwonumbers(20,20))
//     console.log(multiplication(20,20))
// }
// app();

// // lexical scope
// let myvar="here is value";

// function myfunc(){
//     // const myvar="value";

//     function myapp(){
//         // const myvar="novalue";
//         console.log("you are inside myapp ",myvar);
//     }
//     myapp();
// }
// myfunc();

// const d=new Date();
// console.log(d.getDay());
// console.log(d.getDate());
// console.log(d.getTime());
// console.log(d.getFullYear());

// console.log(d);
// const number=20.5;
// const num=2;
// console.log(number);
// console.log(Math.round(number));
// console.log(Math.ceil(number));
// console.log(Math.floor(number));
// console.log(Math.trunc(number));
// console.log(Math.sign(number));
// console.log(Math.pow(3,3));
// console.log(Math.sqrt(64));
// console.log(Math.abs(-64));
// console.log(Math.PI);
// console.log(Math.max(10,20,54,1,78,920,2));
// console.log(Math.min(10,20,54,1,78,920,2));
// console.log((Math.max(1,8,54,54,654,1,654))-(Math.min(10,20,54,1,78,920,2)));

// console.log(this);
// if(false){

// }
// const isreload=(i)=>{
//     if (i==2)
//     window.location.reload();
// }
// isreload(2);

// callback function //////////////
// function myfunction(func){
//     console.log("inside myfunction");
//     func(x,y);
// }
// myfunction(multiplication);

// function multiplication(x,y){
//     console.log(x+y);
// }

// error handling

// koi error aaye usko handle krna

// try

// catch

// throw

// finally

// function myfunc(x,y){
//     console.log(20/0);
// }
// // myfunc();

// try{
//     myfunc(20,0);
//     throw x/y;
// }
// catch(ex){
//     console.log(ex);
// }

// array methods ///////////////////////////

// foreach
// map
// filter
// reduce
//   0  1 2 3 4
// const numbers=[1,2,3,4,5];

// function mulply(number,index){
//     console.log(`number is ${number} and index is ${index}`);
// }
// for(let i=0;i<numbers.length;i++){
//     mulply(numbers[i],i);
// }

// numbers.forEach((number,index)=>{
//     console.log(`number is ${number} and index is ${index}`);
// })

// const users=[
//     {
//         name:"shailesh",
//         age:21
//     },
//     {
//         name:"manoj",
//         age:22
//     },
//     {
//         name:"vinay",
//         age:23
//     },
//     {
//         name:"xyz",
//         age:24
//     },
//     {
//         name:"abc",
//         age:25
//     },
//     {
//         name:"mno",
//         age:26
//     }
// ]
// function takeuser(user){
//     console.log(user.name,user.age*2);
// }

// for(let i=0;i<users.length;i++){
//     takeuser(users[i]);
// }

// const useragesdouble=users.forEach((user)=>{
//     console.log(user.age*2,user.name);
// })

// map //////////////////////////////////////////
// const numbers=[1,2,3,4,5,6];

// const new_values = numbers.map((num)=>{
//     return num*num;
// })
// console.log(new_values);
// console.log(numbers);
// const newusers=users.map(function(user){
//     return `name is ${user.name},and age is ${user.age*2}`;
// })
// console.log(newusers);
// filter methods ////////////////////////

// const numbers=[1,2,3,4,5,6,8,9,10];
//     const iseven = numbers.filter((num)=>{
//         return num%2!=0;    //true,false
//     })
// console.log(iseven);

// const userage=users.filter((user)=>{
//     return user.age>=22;
// })
// console.log(userage);

// reduce /////////////////////////////////////////////

// const numbers=[1,2,3,4,5,6,7,8,9,10];
// const sum =numbers.reduce((accumulator,currentvalue)=>{
//     return accumulator+currentvalue;
// },100)
// accumulator  currentvalue   return
//              1              1
// 1            2               3
// 3            3               6
// 6            4               10
// 10           5               15

// console.log(sum);

// reduce--- accumulator currentvalue  return

// const cart =[
//     {proID:1,producname:"smartphone",price:20000},
//     {proID:2,producname:"nirma",price:19000},
//     {proID:3,producname:"watch",price:1000},
// ]

// const totalitemprice=cart.reduce((totalprice,currentproduct)=>{
//     return totalprice + currentproduct.price;
// },0)
// console.log(totalitemprice);

// find /////////////////////////////////

// const myarray =["shailesh","prajyot","xyz1","abc"];

// function islenght3(string){
//     return string.length===3;
// }

// const ans=myarray.find(islenght3);
// console.log(ans);

// const output=myarray.find((string)=> {
//     return string.length===3;
// })
// console.log(output);

// const users=[
//         {
//             id:1,
//             name:"shailesh",
//             age:21
//         },
//         {
//             id:2,
//             name:"manoj",
//             age:22
//         },
//         {
//             id:3,
//             name:"vinay",
//             age:23
//         },
//         {
//             id:4,
//             name:"xyz",
//             age:24
//         },
//         {
//             id:5,
//             name:"abc",
//             age:25
//         },
//     ]

//     const userdetail=users.find((user)=>{
//     return user.name==="xyz";
// })
// console.log(userdetail);

// every method ---- true , false
// const myarray= [2,4,6,8,11];

// const output= myarray.every((number)=>{
//     return number%2===0;
// })
// console.log(output);

// const users=[
//             {
//                 id:1,
//                 name:"shailesh",
//                 age:21
//             },
//             {
//                 id:2,
//                 name:"manoj",
//                 age:22
//             },
//             {
//                 id:3,
//                 name:"vinay",
//                 age:23
//             },
//             {
//                 id:4,
//                 name:"xyz",
//                 age:24
//             },
//             {
//                 id:5,
//                 name:"abc",
//                 age:25
//             },
//         ];

// const userageless30 = users.every((user)=>{
//     return user.age < 30;
// })
// console.log(userageless30);

// methods  ////
// inside object
// console.log(this);

// function userinfo(){
//     console.log(`user name is ${this.name} and age is ${this.age}`);
// }

// const user1={
//     name:"jitendra",
//     age:23,
//     about:userinfo
// }
// const user2={
//     name:"shailesh",
//     age:22,
// }
// user1.about(user2);
// user1.about.call(user2);
// about.apply(user1,["prajyot","dinesh"]);

// const user1 = {
//     firstname:"shailesh",
//     lastname:"gokhale",
//     email:"shail@gmail.com",
//     age:22,
//     city:"nagpur",
//     is18:function(){
//         return this.age >=18;
//     },
//     about:function(){
//         return `my name is ${this.firstname} and age is ${this.age}`;
//     },

// }
// const usermethod={
//     about : function(){
//         return `my name is ${this.firstname} and age is ${this.age}`;
//     },
//     is18 : function(){
//         return this.age >=18;
//     },
//     even:function(){
//         return this.age%2==0;
//     }
// }

// function createUser(firstname,lastname,email,age,city){
//     const user={}
//     user.firstname =firstname;
//     user.lastname =lastname;
//     user.email=email;
//     user.age=age;
//     user.city=city;
//     user.about=usermethod.about;
//     user.is18=usermethod.is18;
//     user.even=usermethod.even;
//     return user;
// }

// const user1 =createUser("shailesh","gokhale","123@email.com",22,"nagpur")
// const user2 =createUser("xyz","gokhabcale","123@email.com",22,"nagpur")
// console.log(user1.about());
// console.log(user2.about());
// console.log(user2.even());

// const obj1={
//     key1:"value1",
//     key2:"value2"
// }

// // proto----prototype   __proto__

// const obj2= Object.create(obj1);
// obj2.key3="value3";

// console.log(obj2.__proto__);

// proto ///////////////////////////////////////Object.create()///

// const usermethod={
//         about : function(){
//             return `my name is ${this.firstname} and age is ${this.age}`;
//         },
//         is18 : function(){
//             return this.age >=18;
//         },
//         even:function(){
//             return this.age%2==0;
//         }
//     }

//     function createUser(firstname,lastname,email,age,city){
//         const user=Object.create(usermethod);
// user.firstname =firstname;
// user.lastname =lastname;
// user.email=email;
// user.age=age;
// user.city=city;
// return user;
//     }

//     const user1 =createUser("shailesh","gokhale","123@email.com",22,"nagpur")
//     const user2 =createUser("xyz","gokhabcale","123@email.com",22,"nagpur")
//     console.log(user1.about());

// console.log(user1.about());
// console.log(user2.about());
// console.log(user2.even());
// console.log(user1.about());
// console.log(user1.even());
// console.log(user1.is18());

// proto give the reference function, chain create krta hai

// javascript me sbkuch object hai.

// prototype blank object deta hai

// function hamesha free space deta hai

// function ======> function + object

// function hello(){
//     console.log("hello");
// }

// const myname="shailesh";
// console.log(hello.name);   // javascript property name

// you can create your own property

// hello.my_own_property= "shailesh";
// console.log(hello.my_own_property);

// console.log(hello.prototype);

// var , object , array ye sb protype nahi dete sirf function hi prototype deta hai

// if(hello.prototype){
//     console.log("prototype present");
// }else{
//     console.log("not present");
// }

// hello.prototype.myname="shailesh";
// hello.prototype.obj={
//     name:"shail",
//     age:22
// }
// hello.prototype.givemesometime= function(){
//     return "give me some sunshine";
// }

// console.log(hello.prototype.givemesometime());

// const usermethod={
//         about : function(){

//         },
//         is18 : function(){
//             return this.age >=18;
//         },
//         even:function(){
//             return this.age%2==0;
//         }
//     }

// function createUser(firstname,lastname,email,age,city){
//     const user=Object.create(createUser.prototype);
//             user.firstname =firstname;
//             user.lastname =lastname;
//             user.email=email;
//             user.age=age;
//             user.city=city;
//             return user;
// }

// createUser.prototype.about= function(){
//     return `my name is ${this.firstname} and age is ${this.age}`;
// }
// createUser.prototype.is18 = function(){
//     return this.age >=18;
// }
// createUser.prototype.even=function(){
//     return this.age%2==0;
// }

// const user1 =createUser("shailesh","gokhale","123@email.com",22,"nagpur")
// const user2 =createUser("xyz","gokhabcale","123@email.com",22,"nagpur")

// console.log(user1.about());
// console.log(user2.about());
// console.log(user2.even());
// console.log(user1.about());
// console.log(user1.even());
// console.log(user1.is18());

// new Keyword    ////////////////////////////////////////////////////////////////////////////////////
// new
// empty object this={}
// return this

// function createUser(name,age){
//     this.name=name;
//     this.age=age;
// }

// createUser.prototype.about = function(){
//     console.log(this.name,this.age);
// }

// const user= new createUser("shailesh",22);

// user.about();

// above example ////////////////////////////////////////////////////////////////////////////////

// function createUser(firstname,lastname,email,age,city){
//                 this.firstname =firstname;
//                 this.lastname =lastname;
//                 this.email=email;
//                 this.age=age;
//                 this.city=city;
//     }

//     createUser.prototype.about= function(){
//         return `my name is ${this.firstname} and age is ${this.age}`;
//     }
//     createUser.prototype.is18 = function(){
//         return this.age >=18;
//     }
//     createUser.prototype.even=function(){
//         return this.age%2==0;
//     }

//     const user1 = new createUser("shailesh","gokhale","123@email.com",22,"nagpur")
//     const user2 = new createUser("xyz","gokhabcale","123@email.com",22,"nagpur")

//     console.log(user1.about());
//     console.log(user2.about());
//     console.log(user2.even());
//     console.log(user1.about());
//     console.log(user1.even());
//     console.log(user1.is18());

//     for(let key in user1){
//         // console.log(key);
//         if(user1.hasOwnProperty(key)){
//             console.log(key);
//         }
//     }

// let numbers =[1,2,3,4];

// let numbers = new Array(1,2,3,4);
// console.log(numbers);

// console.log(Array.prototype);

// class data members and member function , constructor , super();

// class CreateUser{
//     constructor(firstname,lastname,email,age,city){
//         this.firstname =firstname;
//         this.lastname =lastname;
//         this.email=email;
//         this.age=age;
//         this.city=city;
//     }
//     about(){
//             return `my name is ${this.firstname} and age is ${this.age}`;
//         }

//     is18(){
//             return this.age >=18;
//         }

//     even(){
//         return this.age%2==0;
//     }
// }

// const user1= new CreateUser("shailesh", "gokhale","email@test.com",23,"nagpur");
// console.log(user1.about());
// console.log(Object.getPrototypeOf(user1));

// class Animal{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     cute(){
//         return `${this.name} is cute`;
//     }

//     iseat(){
//         return `${this.name} is eating`;
//     }
// }

// // const animal1 = new Animal('johny',1);
// // inheritance ---- access the property of parent class

// class Dog extends Animal{
//         constructor(name,age,speed){
//             super(name,age)
//             this.speed=speed;
//         }
//     run(){
//         return `${this.name} is running at ${this.speed} kmph`;
//     }
// }

// const tom = new Dog("Tom",1,45);
// console.log(tom);

// PART 2///////////////////////////////////////// front end

// const heading=document.getElementById("main-heading");
// console.dir(typeof (heading));

// const main_heading=document.querySelector("#main-heading");

// const header=document.querySelector(".heading");
// console.log(main_heading);
// console.log(header);

// const links=document.querySelectorAll(".link");
// console.log(links);

// const main_heading=document.querySelector("#main-heading");

// if(main_heading.textContent == "hello good evening all of you2"){
//     main_heading.textContent="Good Night";
// }else{
//     main_heading.textContent="Good morning";
// }

// function getValue(){

//     const getvalue=document.querySelector('input').value;
//     console.log(getvalue);
// }

// Style change via javascript

// const mainHeading = document.querySelector("div.main-heading h1");
// // console.log(mainHead);
// mainHeading.style.color = "blue";
// mainHeading.style.backgroundColor ="red";
// mainHeading.style.border="20px solid green"
// mainHeading.style.borderRadius="200px";

// if(mainHeading.textContent=="hello good evening all of you2"){
//     mainHeading.style.border="20px solid green"
// }else{
//     mainHeading.style.border="20px solid blue"
// }

// get and set attributes

// const link = document.querySelector("a");
// console.log(link.getAttribute("href"));
// link.setAttribute("href","https://www.google.com");

// const list =document.querySelectorAll(".link");
// console.log(typeof list); // return nodelist
// console.log(Array.isArray(list));

// const links =document.getElementsByClassName("link");
// const links = document.getElementsByTagName("a");
// console.log(links); // return html collection array like object which support two operations indexing & lenght

// for(let i=0;i<links.length;i++){
//     const link=links[i];
//     link.style.color="white";
//     link.style.backgroundColor="black";
// }
// for(let i of links){
//     // const link=links[i];
//     i.style.color="white";
//     i.style.backgroundColor="black";
// }
// foreach does not support

// var dark= false;
// const section = document.querySelector(".main-class");
// if(dark==true){
//     var new_added_class=section.classList.add('bg-dark');
// }else{
//     new_added_class=section.classList.add('border-red');
// }

// const section = document.querySelector(".main-class");
// // section.innerHTML=section.innerHTML + "<li>hello</li>";
// const newElement="this is my first class"
// console.log(section);
// // const new_elementSection=section.append(newElement);
// const new_elementSection = document.querySelector(".list2");
// new_elementSection.remove();
// console.log(new_elementSection);

// switch case =
// 1 -background-color:black
// 2 -background-color:white
// 3 -background-color:green
// 4 -background-color:red
// 1 -background-color:blue

// const btn= document.querySelector(".btn-section");
// console.dir(btn);

// pahla tarika
// btn.onclick= function(){
//     console.log("hello");
// }

// dusra tarika
// function clickMe(){
//     console.log("clicked !!!!!")
// }

// btn.addEventListener("click",clickMe=()=>{
// alert("hello")
// confirm("hello");
// });

// const btns= document.querySelectorAll(".btns button");
// for(let button of btns){
//     button.addEventListener("click",function(){
//         console.log(this.textContent);
//     })
// }

// for(let button=0; button<btns.length; button++){
//     btns[button].addEventListener("click",function(){
//         console.log(this);
//     })
// }

// btns.forEach(function(button){
//     button.addEventListener("click", function(){
//         console.log(this);
//     })
// })

// event object

// callback function
// jo event perform hua hai uski information bhi deta hai object ke form me

// function hello(abc){
//     console.log(abc);
// }
// hello({name1:"shailesh1",name2:"shailesh2"});

// const btn = document.querySelector("#btn1");
// btn.addEventListener("click",function(button){
//     console.log(button);
// })

// const btns= document.querySelectorAll(".btns button");
// btns.forEach(function(button){
//         button.addEventListener("click", (event)=>{
//             console.log(event.target);
//         })
// })

// API- application programming interface

// API operations
// get --data lene ke liye or server se data lane k liye
// POST -- server me data bhejne ke liye
// delete -- delete data from server
// patch --- perticular data edit krne ke liye
// PUT --- edit krke bhejne ke liye

// console.log("API work started here !");

// fetch("https://randomuser.me/api/").
// fetch("https://reqres.in/api/users?page=2")
//   .then((response) => {
//     return response.json();
//   })
//   .then((userdata) => {
//     // console.log(userdata);
//     userdata.data.forEach((d)=>{
//         console.log(d.id);
//     })
//   });


//   fetch('https://reqres.in/api/users?page=2').then((response)=>{
//         // console.log(response);
//          return response.json();
//   }).then((user_data)=>{
//       for(let user of user_data.data){

//           console.log(user.email);
//           console.log(user.first_name);
//           console.log(user.last_name);
//       }
//   })

// POST method of API 

// data bhejta hai json ke form me server me 
// function getdata(){

//     fetch('https://jsonplaceholder.typicode.com/posts').then((response)=>{
//         console.log(response);
//         return response.json();
//     }).then((data)=>{
//         console.log(data);
//     })
// }

// fetch('https://jsonplaceholder.typicode.com/posts/',{
//     method:'POST',
//     body:JSON.stringify({
//         title:"my name is shailesh",
//         body:"my name is shailesh",
//         userId:20,
//         name:123
//     }),
//     headers:{
//         'Content-type':"application/json"
//     }
// }).then((response) => response.json()).then((json)=>{
//     console.log(json);
// })
// getdata();

// fetch('https://jsonplaceholder.typicode.com/albums/1/photos',{
//     method:'GET',
//     headers:{
//         'Content-type':"application/json"
//     }
// }).then((response) => response.json()).then((json)=>{
//     console.log(json);
// })

// var form = document.getElementById('form');
// form.addEventListener('submit',function(e){
//     e.preventDefault();

//     var name= document.getElementById('name').value
//     var body= document.getElementById('body').value
//     var userid= document.getElementById('userid').value

//     // now we can post data in API

//     fetch('https://jsonplaceholder.typicode.com/posts/',{
//     method:'POST',
//     body:JSON.stringify({
//         title:name,
//         body:body,
//         userId:userid,
//     }),
//     headers:{
//         'Content-type':"application/json"
//     }
// }).then((response) => response.json()).then((data)=>{
//     console.log(data);
//     var results = document.getElementById('data');
//     results.innerHTML=`<p>the title is ${data.title} and ${data.body} and ${data.userId} </p>`;
// })
// })

// fetch('https://jsonplaceholder.typicode.com/albums/1/photos',{
//     method:'GET',
//     headers:{
//         'Content-type':"application/json"
//     }
// }).then((response) => response.json()).then((json)=>{
//     json.forEach((data)=>{
//         imgurl=data.url;
//         // console.log(imgurl);
//         let img = document.getElementById("myimg").src="https://images.pexels.com/photos/1461974/pexels-photo-1461974.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
//         console.log(img); 
//     })
// });






























  
// set of codes that perform percular operations  

// methods  ---- javascript provide krta hai usko bolte hai methods

// khud banate hai usko kahate hai function 
// every function return a value 
// for execute functions code we need to call it 

// syntax 

// function function_name(){
//     -----
//     ----
//     ----
// }


// function add(){
//     let x=10;
//     let y=10;
//     let z=x+y;
//     console.log(z);

// }
// add();



























// classes
// query selector
// dom manupulation
// JSON
// API

// data type
// .docx png jpeg mp3 mp4
// string
// Number
// object
// boolean

// let name="shailesh";
// let num =959555;
// let value=true
// let value2=false
// console.log(name)
// console.log(num)
// console.log(value)
// console.log(value2)

// javascript isme sbkuch object

// array colection of similar data elements

// String, numbers, objects

// const numbers=[1,2,3,4,5,6,7,8,9,10];
// const names=['shailesh','urvashi','shrutika','aditi'];
// const user =[
//     {
//         name:"shailesh",
//         age:24,
//         city:'nagpur',
//         lastname:'gokhale'
//     },
//     {
//         name:"urvashi",
//         age:23,
//         city:'nagpur',
//         lastname:'sambhe'
//     },
//     {
//         name:"shruti",
//         age:23,
//         city:'nagpur',
//         lastname:'sonnkusare'
//     },
//     {
//         name:"aditi",
//         age:23,
//         city:'nagpur',
//         lastname:'humane'
//     }
// ]

// console.log(user);

// console.log(a,names,user);

// const numbers=[1,2,3,4,5,6,7,8,9,10,11];
// console.log(numbers.slice(0,4));

// operators is use for special tasks between two operands

// const name="shailesh";
// console.log(name.slice(1));

// relational operators
// ==  ===
// <
// >
// <=
// >=
// // !=
// const num1 = 20;
// const num2 = 10;

//         // 10    10
// console.log(num1<num2)     // false  //false
// console.log(num1>num2)     // true  //false
// console.log(num1==num2)     //false  //true
// console.log(num1!=num2)     //true   //false
// console.log(num1<=num2)     //false  //true
// console.log(num1>=num2)     //true   //true

// 1995 tushar == aditi 1998           false

// 1998    shailesh  ==   aditi 1998   true

// const number1=50;
// const number2=20;
// const cal=number1+number2;

// logical operators

// AND   &&   jab dono side true hoge tb ye return karega true otherwise false
// OR    ||   jab dono side fasle hoge tb ye return karega false otherwise true
// NOT    !    revers means true hai to false wise versa

// console.log(number1 == number2 && number1 == 50)
// false           &&  true        ========false

// console.log(number1+number2);

// DOM --- document object model
// use ----
// document ----
