export type PokemonGenerationList = {
	[key in PokemonGenerations]: PokemonGenerationItem;
}

export type PokemonGenerations = "Generation 1" | "Generation 2" | "Generation 3" | "Generation 4" | "Generation 5" | "Generation 6" | "Generation 7" | "Generation 8" | "Generation 9";

export interface PokemonGenerationItem {
	generation_number: number;
	id: number;
	name: string;
}

export type PokemonGenerationAdaptedList = {
	[pokemon_id in string]: {
		generation_number: number
	};
}

