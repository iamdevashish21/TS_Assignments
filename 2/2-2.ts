function Summation(arr: number[]):number
{
    var i:number=0
    var sum:number=0

    for(i=0;i<arr.length;i++)
    {
        sum=sum+arr[i]
    }
    return sum

}

var no =[26,6,7,4,5,7]
console.log("The addition is :"+Summation(no))






    
