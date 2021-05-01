import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiPokemonService } from '../service/api-pokemon.service';
import { UtilitarioId } from '../utilitario/utilitarioId';

@Component({
  selector: 'app-dados-pokemon',
  templateUrl: './dados-pokemon.component.html',
  styleUrls: ['./dados-pokemon.component.css']
})
export class DadosPokemonComponent implements OnInit {

  pokemon : any 

  constructor(
    private route: ActivatedRoute,
    private pokemonService: ApiPokemonService ,
    private utilitarioId: UtilitarioId  
    ) { }

  
  ngOnInit(): void {
    this.route.params.subscribe((parametrs: Params) =>{
      console.log(parametrs.id)
      this.pokemonService.getNamePokemon(parametrs.id).subscribe(
        (res) => this.pokemon = res
      )
    } )
  }

  retornoId(url: string): string{
    let id = this.utilitarioId.retornoId(url);
    return id;
  }

}
