import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Dresseur} from './dresseur';
import {Equipe} from './equipe';
import {Pokemon} from './pokemon';
import * as firebase from 'firebase/app';
import 'firebase/database';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  apiUrl: string = 'https://pokeapi.co/api/v2/';
  apiUrlAbilite: string = 'https://pokeapi.co/api/v2/';
  apiUrlList = 'https://pokeapi.co/api/v2/pokemon/?limit=807';



  constructor(private http: HttpClient) { }
  dresseur: Dresseur;

  pokemonList: Pokemon[] = [new Pokemon(1, 'un nom', null, null, '/url'), new Pokemon(2, 'un nom', null, null, '/url'), new Pokemon(3, 'un nom', null, null, '/url')];
  // pokemonList: string[] = ['pikachu', 'pokemon 2', 'pokemon 3'];
  dresseurs: Dresseur[] = [
    new Dresseur(1, 'dresseur 1', new Equipe(1, this.pokemonList)),
    new Dresseur(2, 'dresseur 2', new Equipe(2, this.pokemonList)),
    new Dresseur(2, 'dresseur 3', new Equipe(3, this.pokemonList)),
  ];

  getDresseurs() {

    console.log(this.dresseurs)
    return this.dresseurs;
  }
  setDresseurs() {
    console.log(this.dresseur)
    for (let i = 0; i <= this.dresseurs.length; i++) {
      this.dresseur = this.dresseurs[i];
      const characterRef = firebase.database().ref('dresseurs/' + this.dresseur.name);
      characterRef.set({
        character: this.dresseur
      });
    }
  }
  setData(newData) {
    console.log(newData)
    this.dresseur = newData;
  }
  getData() {
    return this.dresseur;
  }
  getPokemon() {
    return this.http.get(this.apiUrlList);
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
