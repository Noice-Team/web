import { User } from '../user';


export class MemberDb{
	private _user:string|User;


	public get user():string|User{return this._user;}
	public set user(user:string|User){this._user = user;}
}
