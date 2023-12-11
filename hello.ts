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

    constructor(nameObj: name) {
        this.fullName = `${nameObj.firstName} ${nameObj.lastName}`;
    } 
    greet() {
        return `Hello, my name is ${this.fullName}.`;
    }
}

let g: Greeter = new Greeter({firstName: 'Bálint', lastName:'Nemes'});
document.body.innerHTML = g.greet();