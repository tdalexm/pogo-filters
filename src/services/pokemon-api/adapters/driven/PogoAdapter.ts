import { PogoContext } from "../../app/repository/context/PogoContext";
import { PogoApiGenerationStrategy, PogoApiRarityStrategy, PogoApiReleasedStrategy, PogoApiTypeStrategy } from "../../app/repository/strategies";
import type { Pokemon, PokemonGenerationAdaptedList, PokemonGenerationList, PokemonRarityAdaptedList, PokemonRarityItem, PokemonRarityList, PokemonRarityResponse, PokemonTypeAdaptedList, PokemonTypeList, RarityEnum } from "../../app/schemas/PogoApi";
import type { ForPogoApiQueriying } from "../../ports/driven";

export class PogoAdapter implements ForPogoApiQueriying {
	private static _instance: PogoAdapter;
	private readonly _context: PogoContext;
	public static get instance() {
		if (!PogoAdapter._instance) {
			PogoAdapter._instance = new PogoAdapter();
		}
		return PogoAdapter._instance;
	}

	public constructor() {
		this._context = PogoContext.instance;
	}

	async getPokemon(): Promise<Pokemon> {
		return await this._context.setStrategy(new PogoApiReleasedStrategy()).get();
	}

	async getPokemonRarity(): Promise<PokemonRarityResponse> {
		const data: PokemonRarityList = await this._context.setStrategy(new PogoApiRarityStrategy()).get();
		const result: PokemonRarityAdaptedList = {};
		const raritySet: Set<RarityEnum> = new Set();
		Object.values(data).forEach(({ pokemon_id, rarity }) => {
			raritySet.add(rarity);
			result[pokemon_id] = {
				rarity
			};
		});

		return { result, raritySet };
	}

	async getPokemonTypes(): Promise<PokemonTypeAdaptedList> {
		const data: PokemonTypeList = await this._context.setStrategy(new PogoApiTypeStrategy()).get();
		const result: PokemonTypeAdaptedList = {};

		Object.values(data).forEach(({ pokemon_id, type }) => {
			result[pokemon_id] = {
				type
			};
		});

		return result;
	}

	async getPokemonGeneration(): Promise<PokemonGenerationAdaptedList> {
		const data: PokemonGenerationList = await this._context.setStrategy(new PogoApiGenerationStrategy()).get();
		const result: PokemonGenerationAdaptedList = {};

		Object.values(data).forEach(({ id, generation_number }) => {
			result[id] = {
				generation_number
			};
		});

		return result;
	}

}
