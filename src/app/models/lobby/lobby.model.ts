import { User } from '../user';

export class Lobby{
	private _name:string;
	private _owner:string;
	private _size:number;
	private _members:Array<User>;

	public get name():string{return this._name;}
	public set name(name:string){this._name = name;}

	public get owner():string{return this._owner;}
	public set owner(owner:string){this._owner = owner;}

	public get size():number{return this._size;}
	public set size(size:number){this._size = size;}

	public get members():Array<User>{return this._members;}
	public set members(members:Array<User>){this._members = members;}
}
