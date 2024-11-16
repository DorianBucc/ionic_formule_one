import { Injectable } from '@nestjs/common';
import { POKEMONS, TYPES } from '../data/pokemonList';
import { Pokemon } from 'src/data/pokemon';


@Injectable()
export class PokemonService {
  private poke = POKEMONS;
  private taille:number = 13;

  getAll(): Pokemon[] {
    return this.poke;
  }
  getPokemon(id:string): Pokemon | void{
    return this.poke.find((p) => p.id == parseInt(id))
  }
  getPokemonByName(name){
    let tabPoke : Pokemon[] = [];
    this.poke.forEach((pokemon) =>{
      if(pokemon.name.toLowerCase().includes(name.toLowerCase())){
        tabPoke.push(pokemon);
      }
    })

    return tabPoke;
  }
  getType(): string[]{
    return TYPES;
  }

  addPokemon(pokemon: Pokemon): void {
    pokemon.id = this.taille;
    this.taille++;
    this.poke.push(pokemon);
  }

  updatePokemon(id: number, updatedPokemon: Pokemon): void {
    const index = this.poke.findIndex(pokemon => pokemon.id === id);
    if (index !== -1) {
      this.poke[index] = { ...this.poke[index], ...updatedPokemon };
    }
  }

  deletePokemon(id: number): void {
    const index = this.poke.findIndex(pokemon => pokemon.id === id);
    if (index !== -1) {
      this.poke.splice(index, 1);
    }
  }
}
