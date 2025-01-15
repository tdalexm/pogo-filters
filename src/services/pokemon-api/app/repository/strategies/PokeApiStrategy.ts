import { PokeContext } from "../context/PokeContext";
import type { Strategy } from "./Strategy";

abstract class BasePokeStrategy {
	protected readonly _context = PokeContext.instance;
}

export class PokeApiStrategy extends BasePokeStrategy implements Strategy<any> {
	async get(): Promise<any> {
		const { data } = await this._context.request.get('/type');
		return data;
	}
}
