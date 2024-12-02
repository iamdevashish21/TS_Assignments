var Circle = /** @class */ (function () {
    function Circle(cradius) {
        this.radius = cradius;
    }
    Circle.prototype.area = function () {
        return 3.14 * this.radius * this.radius;
    };
    return Circle;
}());
var cobj = new Circle(110);
console.log("The Radius of circle is " + cobj.area());
var cobj2 = new Circle(21);
console.log("The Radius of circle is " + cobj2.area());
