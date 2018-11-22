import { GameType } from '../../game';

export class CreateLobbyInput{
	private _name:string;
	private _gameType:GameType;
	private _size:number;

	public get name():string{return this._name;}
	public set name(name:string){this._name = name;}

	public get gameType():GameType{return this._gameType;}
	public set gameType(gameType:GameType){this._gameType = gameType;}

	public get size():number{return this._size;}
	public set size(size:number){this._size = size;}
}
