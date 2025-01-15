export interface Strategy<T = any> {
	get(...args: any[]): Promise<T>;
}
