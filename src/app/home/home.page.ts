import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {PokemonService} from '../pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  nombre: number;
  nomPokemon: string = '';
  typePokemon: string = '';
  listAttaque: any[] = [];
  photoMale: string;
  photoFemele: string;
  photoShiny: string;
  constructor(private router: Router, private apiService: PokemonService) {
    this.nombre = Math.floor(Math.random() * (807 - 1) + 1);
    console.log("Number : " + this.nombre);
    this.apiService.getPokemonById(this.nombre).subscribe( value => {
      const  result: any = value;
      this.nomPokemon = JSON.stringify(result.name);
      this.typePokemon = JSON.stringify(result.types[0].type.name);
      this.listAttaque = result.abilities;
      console.log(result.sprites.front_default);
      this.photoMale = result.sprites.front_default;
      this.photoFemele = result.sprites.front_female;
      this.photoShiny = result.sprites.front_shiny;
      console.log("Liste : "  + JSON.stringify(this.listAttaque));
      for (let i = 0; i < this.listAttaque.length; i++) {
        console.log(this.listAttaque[i].ability.name);
      }

    });
  }

    VerPageModifier() {
        this.router.navigate(['/cherche']);
    }
  }

