import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  urlBase= "https://pokeapi.co/api/v2";
  constructor(private http:HttpClient) {
    console.log('Pokedex')
  }

  getPokemon(){
    // .set('Type-content', 'aplication/json');
    return this.http.get(this.urlBase)
  }
}
