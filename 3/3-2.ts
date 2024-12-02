class Circle
{
    radius:number

    constructor(cradius:number)
    {
        this.radius=cradius
    }

    area():number
    {
        return 3.14*this.radius*this.radius
    }
}

var cobj =new Circle(110)
console.log("The Radius of circle is "+cobj.area())

var cobj2 =new Circle(21)
console.log("The Radius of circle is "+cobj2.area())

