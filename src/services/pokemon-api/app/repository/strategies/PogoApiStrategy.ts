import type { ReleasedPokemon, PokemonGenerationList, PokemonRarityList, PokemonTypeList } from '../../schemas/PogoApi/';
import type { Strategy } from './Strategy';
import { PogoContext } from '../context/PogoContext';

abstract class BasePogoStrategy {
	protected readonly _context = PogoContext.instance;
}

export class PogoApiReleasedStrategy extends BasePogoStrategy implements Strategy<ReleasedPokemon> {
	async get(): Promise<ReleasedPokemon> {
		const { data } = await this._context.request.get('/released_pokemon.json');
		return data;
	}
}

export class PogoApiRarityStrategy extends BasePogoStrategy implements Strategy<PokemonRarityList> {
	async get(): Promise<PokemonRarityList> {
		const { data } = await this._context.request.get('/pokemon_rarity.json');
		return data;
	}
}

export class PogoApiTypeStrategy extends BasePogoStrategy implements Strategy<PokemonTypeList> {
	async get(): Promise<PokemonTypeList> {
		const { data } = await this._context.request.get('/pokemon_types.json');
		return data;
	}
}

export class PogoApiGenerationStrategy extends BasePogoStrategy implements Strategy<PokemonGenerationList> {
	async get(): Promise<PokemonGenerationList> {
		const { data } = await this._context.request.get('/pokemon_generations.json');
		return data;
	}
}
