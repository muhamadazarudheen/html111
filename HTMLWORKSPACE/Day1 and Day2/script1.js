alert("Welcome to mindgate");
var i;// dt - undefined
i=23;
i=23.5;
i="hello";//dt string
i='s';//dt string
i=true;
i=null;// dt - undefined
i=[10,20,30];
i[1]=25.5;
i[2]="rr";
i[0]=true;
i=new Date();
console.log(i);
i=new Date("5-5-2019");
console.log(i);
i=new Date(1000);
console.log(i);
//1000 ms since jan 1 1970 12 am-- shanmugam
i=new Date(1818,11,26,26,30,0,0);
console.log(i);// 
// 26th dec 1818 

var obj={empId:101,empName:"tara",salary:56.78};
obj.salary=100.89;
obj["empName"]="sara";
obj.empName="Leela";
var fieldName="empName";
obj[fieldName]="Sheela";//obj.empName="Sheela"
console.log("Emp name"+obj.empName);
console.log("Object details",obj);
obj.deptId="D1";
console.log("Object details",obj);//4 fields
obj.fieldName="Jwala";
console.log("Object details",obj);//5 fields
var obj1=obj;
obj1.empId=999;
console.log("Object details",obj);//101 999

var obj2={...obj};
obj2.empName="aashish";
console.log("Object details",obj);
var obj3={...obj2,empId:555};
console.log("Object details"+obj3);
obj2.empId=555;
obj3={empId:666,...obj2,location:"Chennai"};
console.log("Object details"+obj3);//555
//Destructuring an array es6
var arr1=[10,20,30];
var [first]=arr1;
console.log(first);//10
var [x,,z]=arr1;
console.log(arr1);//[10,20,30]
x=1000;
console.log(arr1);//[10,20,30]


var {empName,sal}=obj;
//var eName=obj.empName;
//var salary=obj.salary;
console.log(sal);


//array functions

arr1[3]=1000;
console.log(arr1);

arr1[6]=1000;
console.log(arr1);
for(let i=0;i<arr1.length;i++)
{
    console.log(arr1[i]);
}



arr1[4]=200;
arr1[5]=181;
console.log(arr1);


function myFunc(p1,p2,p3)
{
    var sum1=p1*p2*p3;
    return sum1;
}
function myFunc(p1,p2)
{
    var sum1=p1+p2;
    return sum1;
}


var result=myFunc(10,20);
console.log(result);//30
myFunc(10.5,20);//30.5
myFunc(10,"12");//1012
myFunc("10","12");//1012
result=myFunc("12",true);//
console.log(result);//12true, 121,se,exception
myFunc(12);//NaN 
myFunc();//NaN  
result=myFunc(1,2,3);//3 But i want 6
console.log(result);//3


function myFunc()
{
    var sum1=0;
    for(let i=0;i<myFunc.arguments.length;i++)
    {
        sum1+=myFunc.arguments[i];
    }
    return sum1;
}
myFunc();//0
myFunc(12);//12 
myFunc();//0 
result=myFunc(1,2,3);//6
result=myFunc(1,2,3,4,5,6,7,8,9);//45
console.log(result);//45
result=myFunc([1,2,3],4,5,6);
console.log(result);
//es6
function myFunc(...p1)
{
    var sum1=0;
    for(let i=0;i<p1.length;i++)
    {
        sum1+=p1[i];
    }
    return sum1;
}

var i=10;
i="hello";
i=function (p1,p2)
{
    return p1+p2;
};//function ; i function literal

result=i(10,20);
console.log(result);//30
//myFunc1(100,200);//SE,Exception
function myFunc2(p1,p2)
{
    return p1+p2;
}
myFunc2(10,20);
//usage of anonymous function
//self invoking function IIFE
(function (p1,p2)
{
    console.log(p1+p2);
})(10,20);//30

// Usage 2:

var emp={"empId":101,"empName":"Harish","salary":898,
printD:function ()
{
    console.log(this.empId);
    console.log(this.empName);
}}
emp.printD();
//emp.101;
//emp.printDetails();

//Usage 3
function myFunc3(p1,p2)
{
    p1();
    p2();
    //myFunc4();
}
// myFunc3(1,2);
// myFunc3("1",2);
// myFunc3(1,true);
// myFunc3([1,2]);
//myFunc3({1:2});
myFunc3(function ()
{
    console.log("hello");
},function(){console.log("Bye");})

//closure function
var s=function()
{
    console.log("Hello");
}
s();
function myFunc5(p1)
{
    p1=100;
    return function innerFunc(p2)
    {
        p1++;
        console.log("inner function" +p1+p2);
    }
}
result=myFunc5();//function
result(10);//inner function10110
result(20);//inner function10220
result(30);//inner function10330
result=myFunc5();
result(777);//inner function101777 




















