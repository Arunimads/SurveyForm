// output

//window.alert("hello world");
//window.confirm("do you want to close")    //for more popup window
//window.prompt("enter your age");

//console.log("hello world");  //seen inside console , used for debugging, testing purpose
//document.write("hello document"); //testing purpose, 


//innerHTML

//document.getElementById("demo").innerHTML="Hello from inner html"; 
//document.getElementById("demo").innerHTML=prompt("enter text to display");
//document.getElementById("demo").style.border="2px solid red";
function test() {
  document.getElementById("search").href = "https://www.wikipedia.org/";
  document.getElementById("search").innerHTML = "Wikipedia";
  document.getElementById("demo").className = "m-5 border p-3 rounded";
  document.getElementById("demo").classList.add("m-5", "h1");
  document.getElementById("demo").classList.add("shadow");
  //document.getElementById("demo").classList.remove("h1");


  //document.getElementById("in").value="hello Arun";
  alert(document.getElementById("in").value);

}
function change() {
  document.getElementById("img").src = "./image/nature.jpg"
}
function unchange() {
  document.getElementById("img").src = "./image/natural.jpg"
}


//variable
//                 var   let (cannot get outside the)    const
// scope
// redcl


//operators
//arithemetic                     + - * / % ++ -- **(exponents powers)  
//assign                          = += -= /= *= %= ( x=x+10   is   x+=10)
//logical                         ! && ||
//comparison/relatn/ condition    < <=  > >= == (10=="10" true in case of js value is taken not data typ) 
// (10==="10"  false ,data type is considered)   !=   !==
//

console.log(10 + 10 + "20");      //output 2020  
console.log("20" + 10 + 10 + "20");      //output 20101020  starting string all data become string  

var sum = 10 + 20;
console.log(`result is ${sum} the sum is ${sum}`);
var data = {
  name: "akhil",
  age: 24,
  class: "10th"
}
console.warn(data);


var sum = 50 - 10;
console.log(`the result is ${sum}`);
console.log(`the result is ${50 - 10}`);


                //conditional statements

           //if, if else,else if   ( nested if , else if ladder)
           // switch
           // ternory operator
           
           //voting system  >=18   or not eligible

          // var age=parseInt(prompt("enter your age"));  //explicit, implicit

          //if (age>=18){
            //alert("your eligible to vote");

          //}else{
            //alert("you are not eligible to vote")
//}
function voting(age){
//var age=parseInt(prompt("enter your age"));
var out=document.getElementById("output");
 if(age<=0){
  main.classList.add("border-danger")
  out.classList.add("text-danger")
  out.innerHTML="Age is invalid";
}
else if(age<10){
  main.classList.add("border-warning")
  out.classList.add("text-warning")
  out.innerHTML="You are too young to vote";
}
else if(age>=10 && age<18){
  main.classList.add("border-warning")
  out.classList.add("text-warning")
  out.innerHTML="Your voting age is soon";

}
else if(age>100){
  main.classList.add("border-warning")
  out.classList.add("text-warning")
  out.innerHTML="Your voting age is above";


}
              
else if(age>=18){

main.classList.add("border-success")
out.classList.add("text-success")
out.innerHTML="You are eligible to vote";

}
else {
  main.classList.add("border-danger")
  out.classList.add("text-danger")
  out.innerHTML="Age is invalid";


}
}


//ternory

//out.innerText=(age>=18)?"eligible":"not eligible";
function grade(grade){
  switch(grade){
    case "A+":
    Grades.className=("border-success container p-5 shadow border rounded");
    graderes.className=("text-success");
    graderes.innerHTML="champion of exam";
    break;

    case "B+":
    Grades.className=("border-success container p-5 shadow border rounded");
    graderes.className=("text-warning");
    graderes.innerHTML="Very good";
    break;

    case "C+":
    Grades.className=("border-success container p-5 shadow border rounded");
    graderes.className=("text-primary");
    graderes.innerHTML="good";
    break;

    case "D+":
    Grades.className=("border-success container p-5 shadow border rounded");
    graderes.className=("text-info");
    graderes.innerHTML="passed";
    break;

    case "E+":
    Grades.className=("border-success container p-5 shadow border rounded");
    graderes.className=("text-danger");
    graderes.innerHTML="failed";
    break;

   default:
    Grades.className=("border-success container p-5 shadow border rounded");
    graderes.className=("bg-danger text-white");
    graderes.innerHTML="error";
    break;
    

    
  }

}

                      //events

//  --onchange, onclick,ondblclick,onerror

                     //functions
//funtions are named block of code having set of statements, they execute later when it is invoked or called,  helps to code reusability

                     function Sum(num1,num2){
                      console.log(num1+num2);
                     }
                     Sum(10+30);
                     Sum(50+50);
//every functions have a return values
//-- used to write code that needs to reused
  //-- two type  1)build in  2)user defined

  //function is called arguments is called as parameters

  function Calculator(num1,num2,op){
    var num1=parseInt(document.getElementById('num1').value);
    var num2=parseInt(document.getElementById('num2').value);
    var op=document.getElementById('op').value;
    console.log(num1,num2,op)
    var Display=document.getElementById('display');
    switch(op){
      case'+':
      Display.value=num1+num2;
      return false;
      case'-':
      Display.value=num1-num2;
      return false;
      case'*':
      Display.value=num1*num2;
      return false;
      case'/':
      Display.value=num1/num2;
      return false;

      default:
        break;

    }
  }
  //no need of function name

  //var Area=function(){}

  //used for automatically invoke

  // => arrow function

  // function sample(){
  //   ()=>{}
  // }

  // (()=>{
  //   alert("hello")
  // })();

  //calling function inside function 
  function sample(){
    Calculator();
  }


    var Area=() =>{

    }

  
  Area();


  // another  2 ways
                      //1st method

                      //rest parameter used to pass multiple datas (num1,num2.....data)

  function sum(num1,num2,...data){
    return num1+num2;
  }
  console.log(sum(20,30));

  // in arrow function
   var sum=(num1,num2,...data)=> num1+num2;
         
                    //2nd method

 ()=>20+30;






  //var x=parseInt(prombt("enter first number"));
  //var y=parseInt(prombt("enter second number"));
 // var o=prompt("enter operator");
  //result=calculator(x,y,o);
 // console.log(result)



                               //Array
// special variable to store multiple  datas  var x=[25,52,75,100];  index 0 1 2
var arr=[];
var arr2=new Array(50,60,36)



var x=[25,52,75,100];  //index 0 1 2
x[2]=85      // to change 75 to 85

console.log(x[0]);      //25


var z=[[]];
z=[
  ["akhil",29,"akhil@mail.com"],
  ["arun",25,"arun@mail.com"],
  ["akash",27,"akash@mail.com"],
];
console.log(z[0][2]);  // get email of akhil


//array methods
 var student=["akash",25,"akash@mail.com"];
 student.push="2022-06-07";    //to add
 student.push="passed";
 student.pop()=""                  //to delete last index
 
 console.log(student);     
  // console.log(student.lenght());  for length          console.log(student.indexOf(27));   to search  
                                                                                 // console.log(student.lastIndexOf(28));                                                     
        //var res=student.concate(x,z);        // combine arrays    
       // var res=student.fill(x,2,4);     // to fill array     2 starting 4 ending 
       var res=x.find(d=>d>50);   //deligates
       //another  - include , reverse, shift,unshift,sort,                            
   //console.log(res);                                                                                
                        
   

                                                        //loops
           //for ,while, do while, for off, for in, foreach                                             

           //for

          // for(initial;CSSConditionRule;increament /degrement){

       //    }

       for(let i=0; i<100; i++){
        document.getElementById('loop').innerHTML+=`
        <div class="col">
        <span class="card bg-success-subtle p-4 m-3 border shadow ">${i}</span>
        </div>`;

       }


      //  for( let j=0; j < x.length; j++){
      //   for
      //   console.log(x[j]);
      //  }



      //  var count=0;
      //  while(count<=10){

      //   document.getElementById('loop').innerHTML+=`
      //   <div class="col">
      //   <span class="bg-success-subtle p-4 m-3 border shadow ">${i}</span>
      //   </div>`;
      //  }


                        





