import { PokeRepository } from '../repositories/PokeRepository';
import { BaseContext } from './BaseContext';

export class PokeContext extends BaseContext {
	private static _instance: PokeContext;
	protected _repository: PokeRepository;

	private constructor() {
		super();
		this._repository = PokeRepository.instance;
	}

	public static get instance(): PokeContext {
		if (!PokeContext._instance) {
			PokeContext._instance = new PokeContext();
		}
		return PokeContext._instance;
	}
}
