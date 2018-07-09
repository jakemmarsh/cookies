interface IGetOptions {
  doNotParse?: boolean;
}

interface ISetOptions {
  domain?: string;
  expires?: Date;
  httpOnly?: boolean;
  path?: string;
  secure?: boolean;
}

interface IHooks {
  onSet?: (name: string, finalOptions: ISetOptions) => any;
  onRemove?: (name: string, finalOptions: ISetOptions) => any;
}

export default class Cookies {
  public constructor(cookies?: string | object, hooks?: IHooks);

  public get(name: string, options?: IGetOptions): string;

  public getAll(options?: IGetOptions): { [key: string]: string };

  public set(name: string, value: string | object, options?: ISetOptions): void;

  public remove(name: string, options?: ISetOptions): any;
}