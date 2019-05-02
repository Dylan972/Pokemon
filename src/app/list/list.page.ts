import { Component, OnInit } from '@angular/core';
import {PokemonService} from '../pokemon.service';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

  public nom: string;
  public photo: string;
  public all151: Array<{
    nom;
    // photo;
    num
  }> = [];

  constructor(private apiService: PokemonService) {
    this.apiService.getPokemon().subscribe((val) => {
      const result: any = val;
      /**
       * Boucle pour les 151 premiers pokemon
       */
      for (let i = 0; i <= 151; i++) {
        // this.nom = JSON.stringify(result.results[i].name);
        this.nom = result.results[i].name;
        // this.photo = result.results[i].sprites.front_default;
        /**
         * la constante nomMaj set la premiere lettre du nom du pokemmon en Majuscule
         */
        const nomMaj = this.nom.charAt(0).toUpperCase() + this.nom.slice(1);

        // this.all151.push({nom: nomMaj, photo: this.photo, num: i + 1});
        this.all151.push({nom: nomMaj, num: i + 1});

        console.log('Pokemon : ' + JSON.stringify(this.nom));

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
