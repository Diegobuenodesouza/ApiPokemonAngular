import { Component, OnInit } from '@angular/core';
import { ApiPokemonService } from '../service/api-pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  listaElementos : String[] = []
  listaPokemon: any[] = []

  tipo: string = ''
  pesquisa: string = ''

  

  constructor(
    private pokemonService: ApiPokemonService
  ){}

  


  ngOnInit(): void {   
    this.listarLimite100()

    this.pokemonService.getType().subscribe(
      (resposta) => {
        resposta['results'].forEach((element : any) => {
          let retorno : string = element['name']
          let nome = retorno.substring(0,1).toUpperCase()
          nome += retorno.substring(1); 
          this.listaElementos.push(nome)
        });        
      }
    )
  }

  listarLimite100(): void{
    this.pokemonService.getLimitPokemon().subscribe(
      (res) => {
        
        res.results.forEach((element : any) => {
          this.pokemonService.getNamePokemon(element['name']).subscribe(
            (resposta : any) => this.listaPokemon.push(resposta))
        });  
      }
    );
  }


  pesquisaNome(nome : any) {
    
    this.listaPokemon = []
    this.pokemonService.getAllPokemon(nome).subscribe(
     (resposta) => {


      if (nome === ''){
        this.listarLimite100()
      }

      else{
        resposta.results.forEach((element : any) => {
          this.pokemonService.getNamePokemon(element['name']).subscribe(
            (pokemon : any) => {         
              if(pokemon['name'].includes(nome.toLowerCase()) ){
                this.listaPokemon.push(pokemon)
              }           
            })
        });
      }         
     }   
    )   
  }
  


  onChange(tipo : any) {
    this.listaPokemon = []
    let comparacao : string = tipo.value
    comparacao = comparacao.toLowerCase()

    this.pokemonService.getAllPokemon(tipo).subscribe(
     (resposta) => {

      if (comparacao === 'todos'){
        this.listarLimite100()
      } 
      else{
      resposta.results.forEach((element : any) => {
        this.pokemonService.getNamePokemon(element['name']).subscribe(
          (pokemon : any) => {            
            if(pokemon['types'][0]['type']['name'] === comparacao) {
              this.listaPokemon.push(pokemon)            
            }                        
          }          
        )}, 
      )
    }      
     }
    ) 
  }


}
