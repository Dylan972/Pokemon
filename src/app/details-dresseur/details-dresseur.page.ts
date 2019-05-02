import { Component, OnInit } from '@angular/core';
import {PokemonService} from '../pokemon.service';
import {Dresseur} from '../dresseur';

@Component({
  selector: 'app-details-dresseur',
  templateUrl: './details-dresseur.page.html',
  styleUrls: ['./details-dresseur.page.scss'],
})
export class DetailsDresseurPage implements OnInit {
  dresseur: Dresseur
  constructor(private ps: PokemonService) { }

  ngOnInit() {
    this.dresseur = this.ps.getData();
  }

}
