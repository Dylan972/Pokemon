import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'cherche', loadChildren: './cherche/cherche.module#CherchePageModule' },
  {path: 'dresseur-liste', loadChildren: './dresseur-liste/dresseur-liste.module#DresseurListePageModule'},
  {path: 'details-dresseur', loadChildren: './details-dresseur/details-dresseur.module#DetailsDresseurPageModule'},
  { path: 'detail-pokemon', loadChildren: './detail.pokemon/detail.pokemon.module#DetailPokemonPageModule' }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
