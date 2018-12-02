import { MemberDb } from './member.db.model';

import { GameType } from '../game';

export class LobbyDb{
	public id:string;
	public name:string;
	public owner:string;
	public gameType:GameType;
	public size:number;
	public creationDate:Date;
	public members:Array<MemberDb|string>;
}
