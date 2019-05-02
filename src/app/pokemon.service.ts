import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Dresseur} from './dresseur';
import {Equipe} from './equipe';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  apiUrl: string = 'https://pokeapi.co/api/v2/pokemon/pikachu';

  constructor(private http: HttpClient) { }
  dresseur: Dresseur;

  dresseurs: Dresseur[] = [
    new Dresseur(1, 'dresseur 1', this.dresseur.equipe.getEquipe()),
    new Dresseur(2, 'dresseur 2', this.dresseur.equipe.getEquipe()),
    new Dresseur(2, 'dresseur 3', this.dresseur.equipe.getEquipe())
  ];

  getDresseurs() {

    console.log(this.dresseurs)
    return this.dresseurs;
  }
  setData(newData) {
    console.log(newData)
    this.dresseur = newData;
  }
  getData() {
    return this.dresseur;
  }
  getPokemon() {
    return this.http.get(this.apiUrl);
  }

  getPokemonByName(name: string) {
    return this.http.get(this.apiUrl + 'pokemon/' + name);
  }


}
