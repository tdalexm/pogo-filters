export type PokemonTypeList = {
	[key in number]: PokemonTypeItem;
}

export interface PokemonTypeItem {
	form: string;
	pokemon_id: number;
	pokemon_name: string;
	type: Type[];
}

export type Type = "Grass" | "Poison" | "Fire" | "Flying" | "Water" | "Bug" | "Normal" | "Dark" | "Electric" | "Psychic" | "Ice" | "Steel" | "Ground" | "Fairy" | "Fighting" | "Rock" | "Ghost" | "Dragon";

export type PokemonTypeAdaptedList = {
	[pokemon_id in string]: {
		type: Type[];
	}
}
