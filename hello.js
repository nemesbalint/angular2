var Greeter = /** @class */ (function () {
    function Greeter(nameObj, skill) {
        if (skill === void 0) { skill = "programming"; }
        this.fullName = "";
        this.skills = [
            "programming",
            "build"
        ];
        this.skillsAndPoints = [
            "programming",
            3
        ];
        this.skillsObject = [
            { name: "programming", point: 3 },
            { name: "compile", point: 10 }
        ];
        this.fullName = "".concat(nameObj.firstName, " ").concat(nameObj.lastName);
        this.skill = skill;
    }
    Greeter.prototype.greet = function () {
        return "Hello, my name is ".concat(this.fullName, ".");
    };
    return Greeter;
}());
var g = new Greeter({ firstName: 'Bálint', lastName: 'Nemes' }, "build");
document.body.innerHTML = g.greet();
