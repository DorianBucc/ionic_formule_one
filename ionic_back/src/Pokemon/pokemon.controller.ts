import { Controller } from "@nestjs/common";
import { Body, Delete, Get, Param, Post, Put } from "@nestjs/common/decorators/http";
import { Observable, of } from "rxjs";
import { PokemonService } from "./pokemon.service";
import { Pokemon } from "src/data/pokemon";

@Controller()
export class PokemonController {
    constructor(private readonly appService: PokemonService) {}

    @Get("formule/")
    getAll(): Observable<Pokemon[] | void> {
      return of(this.appService.getAll());
    }
    @Get("formule/types/")
    getAllTypes(): Observable<string[] | void> {
      return of(this.appService.getType());
    }
    @Get("formule/list/:id")
    findPokemon(@Param('id') id:string): Observable<Pokemon | void> {
      return of(this.appService.getPokemon(id));
    }
    @Get("formule/search/:name")
    findPokemonByName(@Param('name') name:string): Observable<Pokemon[] | void> {
      return of(this.appService.getPokemonByName(name));
    }
    @Post("formule/add")
    addPokemon(@Body() pokemon: Pokemon): void {
      this.appService.addPokemon(pokemon);
    }
  
    @Put('formule/push/:id')
    updatePokemon(@Param('id') id: string, @Body() updatedPokemon: Pokemon): void {
      this.appService.updatePokemon(+id, updatedPokemon);
    }
  
    @Delete('formule/delete/:id')
    deletePokemon(@Param('id') id: string): void {
      this.appService.deletePokemon(+id);
    }
}