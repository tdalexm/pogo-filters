import axios, { type AxiosInstance } from 'axios';

export abstract class BaseRepository {
	protected _request: AxiosInstance;

	constructor(baseURL: string) {
		this._request = axios.create({
			baseURL
		});

		this.request.interceptors.response.use(
			(response) => response,
			(error) => {
				return Promise.reject(error);
			}
		);
	}

	public get baseURL(): string {
		return this._request.getUri();
	}

	public get request(): AxiosInstance {
		return this._request;
	}
}
