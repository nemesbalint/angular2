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
//g.skill = "compile"; 
//Ez így már nem jó, mert readonly!
//let nameParam: name = {firstName: 'Bálint', lastName:'Nemes', age: 22};
//Ez így nem jó, mert nincs number típusú értéke! De Stringgel már jó:
var nameParam = { firstName: 'Bálint', lastName: 'Nemes', age: "22" };
function printGreeting(nameParam) {
    var g = new Greeter(nameParam, "build");
    document.body.innerHTML = g.greet();
}
printGreeting(nameParam);
