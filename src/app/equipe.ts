export class Equipe {
    id: number;
    listePokemon: string[];

    constructor(id: number, listePokemon:string[]) {
        this.id = id;
        this.listePokemon = listePokemon;
    }
    pokemons: string[] = ['pokemon 1', 'pokemon 2', 'pokemon 3'];

    equipe = new Equipe(1, this.pokemons);

    getEquipe() {
        return this.equipe;
    }
}

