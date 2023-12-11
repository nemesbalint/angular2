var Greeter = /** @class */ (function () {
    function Greeter(firstName, lastName) {
        this.fullName = "";
        this.fullName = "".concat(firstName, " ").concat(lastName);
    }
    Greeter.prototype.greet = function () {
        return "Hello, my name is ".concat(this.fullName, ".");
    };
    return Greeter;
}());
var g = new Greeter('Bálint', 'Nemes');
document.body.innerHTML = g.greet();
