class Arithmetic
{
   Number1:number
   Number2:number

   constructor(no1:number,no2:number)
    {
        this.Number1=no1
        this.Number2=no2
    }

    Addition():number
    {
        var ans:number =0
        ans=this.Number1+this.Number2
        return ans
    }

    Substraction():number
    {
        var ans:number =0
        ans=this.Number1-this.Number2
        return ans
    }

    Multiplication():number
    {
        var ans:number =0
        ans=this.Number1*this.Number2
        return ans
    }

    Division():number
    {
        var ans:number =0
        ans=this.Number1/this.Number2
        return ans
    }
}

var  abobj=new Arithmetic(120,110)

console.log("The addition is:"+abobj.Addition())
console.log("The substraction is :"+abobj.Substraction())
console.log("The Multiplication is :"+abobj.Multiplication())
console.log("Thr Division is :"+abobj.Division())


var  abobj2=new Arithmetic(21,11)

console.log("The addition is:"+abobj2.Addition())
console.log("The substraction is :"+abobj2.Substraction())
console.log("The Multiplication is :"+abobj2.Multiplication())
console.log("Thr Division is :"+abobj2.Division())






