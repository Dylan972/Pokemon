import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Dresseur} from './dresseur';
import {Equipe} from './equipe';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  apiUrl: string = 'https://pokeapi.co/api/v2/';
  apiUrlAbilite: string = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) { }
  dresseur: Dresseur;

  dresseurs: Dresseur[] = [
    new Dresseur(1, 'dresseur 1', new Equipe(1, null)), //this.dresseur.equipe.getEquipe()),
    new Dresseur(2, 'dresseur 2', new Equipe(2, null)), //this.dresseur.equipe.getEquipe()),
    new Dresseur(2, 'dresseur 3', new Equipe(3, null)), //this.dresseur.equipe.getEquipe())
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

  getPokemonById(id: number) {
    return this.http.get(this.apiUrl + 'pokemon/' + id);
  }

  getAbiliteByName(name: string) {
    return this.http.get(this.apiUrlAbilite + 'ability/' + name);
  }


}
