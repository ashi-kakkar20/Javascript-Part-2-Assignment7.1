//Js code to print largest among 5 given numbers
var num1=-8;
var num2=12.5;
var num3=-6.679;
var num4=0;
var num5=-1;

// Checking if num1 greater than num 2 ,num3, num4 and num5 then num1 is highest
if(num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5 )
{
    console.log("The largest number is Num1 whose value is  " + num1);
}

//Similarly checking if num2 greater than num 1 ,num3, num4 and num5 then num2 is highest
else if (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5 )
{
    console.log("The largest number is Num2 whose value is  " + num2);
}

//Similarly checking if num3 greater than num 1 ,num2, num4 and num5 then num3 is highest
else if (num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5 )
{
    console.log("The largest number is Num3 whose value is  " + num3);
}

//Similarly checking if num4 greater than num 1 ,num2, num3 and num5 then num4 is highest
else if (num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5 )
{
    console.log("The largest number is Num4 whose value is  " + num4);
}

//If none of the above conditions satisfy then  num5 highest.
else 
{
    console.log("The largest number is Num5 whose value is  " + num5);
}