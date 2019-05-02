import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetailsDresseurPage } from './details-dresseur.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsDresseurPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetailsDresseurPage]
})
export class DetailsDresseurPageModule {}
