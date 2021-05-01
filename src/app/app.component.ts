import { Component, OnInit } from '@angular/core';
import { ApiPokemonService } from './service/api-pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  listaElementos : String[] = ['terra', 'agua' , 'fogo']

  listaPokemon: any[] = []

  constructor(
    private pokemonService: ApiPokemonService
  ){}

  ngOnInit(): void {

    this.pokemonService.getAllPokemon().subscribe(
      (res) => {

        res.results.forEach((element : any) => {

          this.pokemonService.getNamePokemon(element['name']).subscribe(
            (resposta : any) => this.listaPokemon.push(resposta))

        });    
      
      }
    );
  }
  
 
}
