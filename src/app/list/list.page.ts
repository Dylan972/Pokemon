import { Component, OnInit } from '@angular/core';
import {PokemonService} from '../pokemon.service';
import {Pokemon} from "../pokemon";
import {forEach} from "@angular-devkit/schematics";

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

  public nom: string;
  public pokemonList: Pokemon[];
  pokemon: Pokemon;

  constructor(private apiService: PokemonService) {
    this.pokemonList = [];
    this.apiService.getPokemon().subscribe((val) => {
      const result: any = val;
      /**
       * Boucle pour les 151 premiers pokemon
       */
      for (let i = 0; i <= 150; i++) {
        this.nom = result.results[i].name;
        console.log(this.nom);
        /**
         * la constante nomMaj set la premiere lettre du nom du pokemmon en Majuscule
         */
        // const nomMaj = this.nom.charAt(0).toUpperCase() + this.nom.slice(1);
        this.pokemon = new Pokemon(i + 1, this.nom, null, null, null);
        // this.all151.push({nom: nomMaj, photo: this.photo, num: i + 1});
        this.pokemonList.push(this.pokemon);

        console.log('Pokemon : ' + JSON.stringify(this.nom));

      }
      for (let j = 0; j <= this.pokemonList.length; j++) {
        console.log(this.pokemonList[j].name);
        this.apiService.getPokemonByName(this.pokemonList[j].name).subscribe( (value => {
          const resultat: any = value;
          console.log('Photo : ' + resultat.sprites.front_default);
          this.pokemonList[j].photo = resultat.sprites.front_default;
        }));
      }
    });
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
