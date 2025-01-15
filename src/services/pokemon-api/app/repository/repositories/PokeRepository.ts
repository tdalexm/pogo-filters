import { BaseRepository } from "./BaseRepository";

export class PokeRepository extends BaseRepository {
	private static _instance: PokeRepository;

	private constructor() {
		super(import.meta.env.POKEAPI_BASE_URL);
	}

	public static get instance(): PokeRepository {
		if (!PokeRepository._instance) {
			PokeRepository._instance = new PokeRepository();
		}
		return PokeRepository._instance;
	}
}
