export class Hero {
    id?: number;
    name!: string;
    address!: string;
    superpower!: string;
}

export class SuperPowers {
    static list: string[] = [
        "magnetic",
        "bombastic",
        "really smart",
        "rich",
        "hard",
        "biking"
    ]
};