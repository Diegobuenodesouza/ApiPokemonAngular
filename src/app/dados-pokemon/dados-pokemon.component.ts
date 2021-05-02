
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

  hp = 0;
  attack  = 0
  defense  = 0;
  especialAttack = 0;
  especialDefense =0;
  speed = 0;
  

  constructor(
    private route: ActivatedRoute,
    private pokemonService: ApiPokemonService ,
    private utilitarioId: UtilitarioId  
    ) { }

  
  ngOnInit(): void {
    this.route.params.subscribe((parametrs: Params) =>{
      console.log(parametrs.id)
      this.pokemonService.getNamePokemon(parametrs.id).subscribe(
        (res) => {this.pokemon = res , 
          this.hp =  this.pokemon['stats'][0]['base_stat'],
          this.attack =  this.pokemon['stats'][1]['base_stat'],
          this.defense =  this.pokemon['stats'][2]['base_stat'],
          this.especialAttack =  this.pokemon['stats'][3]['base_stat'],
          this.especialDefense =  this.pokemon['stats'][4]['base_stat'],
          this.speed =  this.pokemon['stats'][5]['base_stat'] 
        }
      )
    } )
  }

  retornoId(url: string): string{
    let id = this.utilitarioId.retornoId(url);
    return id;
  }

  getStats(valor : number){
    return valor;
  }

}

