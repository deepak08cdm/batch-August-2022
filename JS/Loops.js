// I have created this func to create the calculator and to perform such calculation.

//to add

function first(total,i)
{
   return total+=i;
    
}
//now append reduce func in general func
let add=function(...number)
{
    let sum=number.reduce(first,0);
    console.log(sum);
}
//add(9,3);

//to subtract

function second(total,i)
{
    return total-=i;
}
let sub=function(...number)
{
    let diff=number.reduce(second);
    console.log(diff);
}
//sub(9,3);

//to product

function third(total,i)
{
    return total*=i;
}
let prod=function(...number)
{
    let mul=number.reduce(third);
    console.log(mul);
}
//prod(9,3);

//to divide

function forth(total,i)
{
    return total/=i;
}
let div=function(...number)
{
    let dec=number.reduce(forth);
    console.log(dec);
}
//div(9,4);
