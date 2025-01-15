export type PokemonRarityList = {
	[key in RarityEnum]: PokemonRarityItem;
}

export interface PokemonRarityItem {
	form: string;
	pokemon_id: number;
	pokemon_name: string;
	rarity: RarityEnum;
}

export type RarityEnum = "Legendary" | "Mythic" | "Standard" | "Ultra beast";

export type PokemonRarityAdaptedList = {
	[pokemon_id in string]: {
		rarity: RarityEnum;
	}
}

export interface PokemonRarityResponse {
	result: PokemonRarityAdaptedList,
	raritySet: Set<RarityEnum>
}
