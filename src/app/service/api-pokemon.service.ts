import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiPokemonService {
  
  private URL_POKEMON = "https://pokeapi.co/api/v2/pokemon";
  private URL_POKEMON_TYPE ='https://pokeapi.co/api/v2/type/';

  constructor(private http : HttpClient) { }

  getLimitPokemon(): Observable<any> {
    return  this.http.get(`${this.URL_POKEMON}?limit=50`)
  }

  getNamePokemon(nome : string): Observable<any>{
    return this.http.get(`${this.URL_POKEMON}/${nome}`)
  }  

  getType(): Observable<any>{
    return this.http.get(this.URL_POKEMON_TYPE)
  }

  getAllPokemon(type : string): Observable<any> {    
     return this.http.get(`${this.URL_POKEMON}?limit=250`)
  }
  
}
