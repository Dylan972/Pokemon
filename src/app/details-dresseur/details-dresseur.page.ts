import { Component, OnInit } from '@angular/core';
import {PokemonService} from '../pokemon.service';
import {Dresseur} from '../dresseur';
import {forEach} from '@angular-devkit/schematics';

import * as firebase from 'firebase/app';
import 'firebase/database';

@Component({
  selector: 'app-details-dresseur',
  templateUrl: './details-dresseur.page.html',
  styleUrls: ['./details-dresseur.page.scss'],
})
export class DetailsDresseurPage implements OnInit {
  dresseur: Dresseur
  constructor(private ps: PokemonService) { }

  newData = firebase.database().ref('chatrooms/dresseurs')



  ngOnInit() {
    this.dresseur = this.ps.getData();
  }


}
