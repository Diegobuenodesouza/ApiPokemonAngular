import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiraMaiusculaPipe } from './utilitario/primeira-maiuscula.pipe';
import { DadosPokemonComponent } from './dados-pokemon/dados-pokemon.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { UtilitarioId } from './utilitario/utilitarioId';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiraMaiusculaPipe,
    DadosPokemonComponent,
    PokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UtilitarioId],
  bootstrap: [AppComponent]
})
export class AppModule { }
