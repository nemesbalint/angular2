interface name {
    firstName: string;
    lastName: string;
    [propName: string]: string;
}

interface printFn {
    (nameParam: name):void;
}

class Greeter {
    fullName: string = "";
    
    skills: Array<string> = [
        "programming",
        "build"
    ];

    skillsAndPoints: Array<string | number> = [
        "programming",
        3
    ];

    skillsObject: Array<{name: string, point: number}> = [
        {name: "programming", point: 3},
        {name: "compile", point: 10}
    ];

    readonly skill: string;
    constructor(nameObj: name, skill: string = "programming") {
        this.fullName = `${nameObj.firstName} ${nameObj.lastName}`;
        this.skill = skill;
    } 
    greet() {
        return `Hello, my name is ${this.fullName}.`;
    }
}

//g.skill = "compile"; 
//Ez így már nem jó, mert readonly!

//let nameParam: name = {firstName: 'Bálint', lastName:'Nemes', age: 22};
//Ez így nem jó, mert nincs number típusú értéke! De Stringgel már jó:
let nameParam: name = {firstName: 'Bálint', lastName:'Nemes', age: "22"};

const printGreeting: printFn = function (nameParam) {
    let g: Greeter = new Greeter(
        nameParam,
        "build"
    );
   
    document.body.innerHTML = g.greet();
}

printGreeting(nameParam);