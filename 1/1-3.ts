function DisplyaFactors(no1:number):void
{
    var i:number=0
    for(i=1;i<=no1;i++)
        {
            if(no1%i===0)
            {
                console.log(i)
            }
        }    
}

DisplyaFactors(20);