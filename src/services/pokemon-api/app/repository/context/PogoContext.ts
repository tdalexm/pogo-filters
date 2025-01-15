import { BaseContext } from './BaseContext';
import { PogoRepository } from '../repositories/PogoRepository';

export class PogoContext extends BaseContext {
	private static _instance: PogoContext;
	protected _repository: PogoRepository;

	private constructor() {
		super();
		this._repository = PogoRepository.instance;
	}

	public static get instance(): PogoContext {
		if (!PogoContext._instance) {
			PogoContext._instance = new PogoContext();
		}
		return PogoContext._instance;
	}
}
