import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  URL_POKEMON = "https://pokeapi.co/api/v2/pokemon/";

  constructor(private http : HttpClient) { }
}
