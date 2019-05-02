import {Equipe} from './equipe';

export class Dresseur {
    id: number;
    name: string;
    equipe: Equipe;

    constructor(id: number, name: string, equipe: Equipe) {
        this.id = id;
        this.name = name;
        this.equipe = equipe;

    }
}
