import { User } from '../user';

import { GameType } from '../game';

export class Lobby{
	private _id:string;
	private _name:string;
	private _owner:string;
	private _gameType:GameType;
	private _size:number;
	private _creationDate:Date;
	private _members:Array<User>;

	public get id():string{return this._id;}
	public set id(id:string){this._id = id;}

	public get name():string{return this._name;}
	public set name(name:string){this._name = name;}

	public get owner():string{return this._owner;}
	public set owner(owner:string){this._owner = owner;}

	public get gameType():GameType{return this._gameType;}
	public set gameType(gameType:GameType){this._gameType = gameType;}

	public get size():number{return this._size;}
	public set size(size:number){this._size = size;}

	public get creationDate():Date{return this._creationDate;}
	public set creationDate(creationDate:Date){this._creationDate = creationDate;}

	public get members():Array<User>{return this._members;}
	public set members(members:Array<User>){this._members = members;}
}
