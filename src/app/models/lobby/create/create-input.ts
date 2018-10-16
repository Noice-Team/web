export class CreateInput{
	private _owner:string;
	private _name:string;
	private _size:number;

	public get name():string{return this._name;}
	public set name(name:string){this._name = name;}

	public get owner():string{return this._owner;}
	public set owner(owner:string){this._owner = owner;}

	public get size():number{return this._size;}
	public set size(size:number){this._size = size;}
}
