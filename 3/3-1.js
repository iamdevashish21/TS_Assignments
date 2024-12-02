var Arithmetic = /** @class */ (function () {
    function Arithmetic(no1, no2) {
        this.Number1 = no1;
        this.Number2 = no2;
    }
    Arithmetic.prototype.Addition = function () {
        var ans = 0;
        ans = this.Number1 + this.Number2;
        return ans;
    };
    Arithmetic.prototype.Substraction = function () {
        var ans = 0;
        ans = this.Number1 - this.Number2;
        return ans;
    };
    Arithmetic.prototype.Multiplication = function () {
        var ans = 0;
        ans = this.Number1 * this.Number2;
        return ans;
    };
    Arithmetic.prototype.Division = function () {
        var ans = 0;
        ans = this.Number1 / this.Number2;
        return ans;
    };
    return Arithmetic;
}());
var abobj = new Arithmetic(120, 110);
console.log("The addition is:" + abobj.Addition());
console.log("The substraction is :" + abobj.Substraction());
console.log("The Multiplication is :" + abobj.Multiplication());
console.log("Thr Division is :" + abobj.Division());
var abobj2 = new Arithmetic(21, 11);
console.log("The addition is:" + abobj2.Addition());
console.log("The substraction is :" + abobj2.Substraction());
console.log("The Multiplication is :" + abobj2.Multiplication());
console.log("Thr Division is :" + abobj2.Division());
