import {Pokemon} from './pokemon';

export class Equipe {
    id: number;
    listePokemon: Pokemon[];

    constructor(id: number, listePokemon: Pokemon[]) {
        this.id = id;
        this.listePokemon = listePokemon;
    }
    // pokemons: string[] = ['pokemon 1', 'pokemon 2', 'pokemon 3'];
}

