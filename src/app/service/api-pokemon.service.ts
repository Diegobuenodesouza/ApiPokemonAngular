import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiPokemonService {
  
  URL_POKEMON = "https://pokeapi.co/api/v2/pokemon";

  constructor(private http : HttpClient) { }

  getAllPokemon(): Observable<any> {
    return  this.http.get(`${this.URL_POKEMON}?limit=50`)
  }

  getNamePokemon(nome : string): Observable<any>{
    return this.http.get(`${this.URL_POKEMON}/${nome}`)
  }  
}
