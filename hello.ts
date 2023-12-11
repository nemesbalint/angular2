interface name {
    firstName: string;
    lastName: string;
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
let g: Greeter = new Greeter(
    {firstName: 'Bálint', lastName:'Nemes'},
    "build");
document.body.innerHTML = g.greet();