import { BaseRepository } from "./BaseRepository";

export class PogoRepository extends BaseRepository {
	private static _instance: PogoRepository;

	private constructor() {
		super(import.meta.env.POGOAPI_BASE_URL);
	}

	public static get instance(): PogoRepository {
		if (!PogoRepository._instance) {
			PogoRepository._instance = new PogoRepository();
		}
		return PogoRepository._instance;
	}
}
