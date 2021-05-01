import { Component, OnInit } from '@angular/core';
import { ApiPokemonService } from '../service/api-pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

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
