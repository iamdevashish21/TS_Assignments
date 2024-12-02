function maximum(no1: number, no2: number, no3: number): number 
{

    var max: number = no1;

    if (no2 > max) 
    {
        max = no2;
    }

    if (no3 > max) 
    {
        max = no3;
    }

    return max;
}

console.log("Maximum number is :"+(maximum(10, 89, 6)))
