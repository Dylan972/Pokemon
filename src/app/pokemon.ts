export class Pokemon {
    id: number ;
    name: string;
    type: string;
    abilities: string[];
    photo: string;


    constructor(id: number, name: string, type: string, abilities: string[], photo: string) {
        this.id = id;
        this.type = type;
        this.abilities = abilities;
        this.photo = photo;
    }
}
