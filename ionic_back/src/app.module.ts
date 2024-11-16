import { Module } from '@nestjs/common';
import { PokemonModule } from './Pokemon/pokemon.module';

@Module({
  imports: [PokemonModule],
})
export class AppModule {}
