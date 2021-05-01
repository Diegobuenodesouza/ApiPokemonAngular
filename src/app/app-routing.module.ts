import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DadosPokemonComponent } from './dados-pokemon/dados-pokemon.component';
import { PokemonComponent } from './pokemon/pokemon.component';

const routes: Routes = [
  {path : '', component: PokemonComponent},
  {path : 'pokemon/:id' , component: DadosPokemonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
