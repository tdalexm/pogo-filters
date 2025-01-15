import type { ReleasedPokemon, PokemonGenerationAdaptedList, PokemonTypeAdaptedList, PokemonRarityResponse } from "../../app/schemas/PogoApi";

export interface ForPogoApiQueriying {
	getPokemonTypes(): Promise<PokemonTypeAdaptedList>;
	getPokemonRarity(): Promise<PokemonRarityResponse>;
	getPokemonGeneration(): Promise<PokemonGenerationAdaptedList>;
	getPokemon(): Promise<ReleasedPokemon>
}
