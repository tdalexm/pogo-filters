import type { Strategy } from '../strategies';
import type { BaseRepository } from '../repositories/BaseRepository';
import type { AxiosInstance } from 'axios';

export abstract class BaseContext {
	protected _strategy: Strategy;
	protected abstract _repository: BaseRepository;

	public get request(): AxiosInstance {
		return this._repository.request;
	}

	public get baseUrl(): string {
		return this._repository.baseURL;
	}

	public async get(...args: any[]): Promise<any> {
		if (!this._strategy) {
			throw new Error('Strategy is not set');
		}
		return await this._strategy.get(...args);
	}

	public setStrategy<T>(strategy: Strategy<T>): this {
		this._strategy = strategy;
		return this;
	}
}
