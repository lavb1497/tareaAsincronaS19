import { Component, OnInit } from '@angular/core';
import { PokedexService } from './services/pokedex.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'actividad-19';

  data:any[] = [];
  pokemons = [];


  constructor(private pokedex:PokedexService){}

  ngOnInit():void{
    this.getPokemons()
  }

  getPokemons(){

    let pokemonData;

    for(let i = 1; i < 150; i++){

      this.pokedex.getPokemon(String(i)).subscribe(
        res => {
          pokemonData = {
            position: i,
            image: res.sprites.front_default,
            name: res.name,
            orden: res.order
          }
          this.data.push(pokemonData)
          console.log(res);
        },
        err => {

        }
      )

    }

  }

  namePokemon!:string;
  pokemonAll = true;
  pokemonBuscado = false;

    ingresar(){
      if(this.namePokemon = "pokemon"){
        this.pokemonAll = false;
        this.pokemonBuscado = true;
      }else {
        this.pokemonAll = true;
        this.pokemonBuscado = false;
      }
    }

}
