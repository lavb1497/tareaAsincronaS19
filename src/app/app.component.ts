import { Component } from '@angular/core';
import { PokedexService } from './services/pokedex.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'actividad-19';

  public pokemons: Array<any> = [];

  constructor(private pokedex:PokedexService){

    this.pokedex.getPokemon().subscribe((res:any) => {
      console.log(res);
      this.pokemons = res;
    })
  }
}
