import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { map, switchMap } from "rxjs/operators";

import { CollectionProviderService } from '../collection-provider.service';
import { Lobby } from '../lobby.model';
import { LobbyDb } from '../lobby.db.model';

import { UserService, User } from '../../user';

@Injectable({
  providedIn: 'root'
})
export class GetLobbyService {

	constructor(
		private userService:UserService,
		private collectionService:CollectionProviderService) {}

	public getAll(start?:number, size?:number):Observable<Array<Lobby>>{
		if(!start){
			start = 0;
		}
		if(!size){
			size = 30;
		}
		return this.collectionService.getMany(ref => ref.orderBy("size").startAt(start).limit(size))
			.snapshotChanges()
			.pipe(
				map(snapshots => snapshots.map(snapshot => {
					let result = Object.assign(new LobbyDb, GetLobbyService.convertDate(snapshot.payload.doc.data()));
					result.id = snapshot.payload.doc.id;
					return result;
				})
				.map(lobby => Object.assign(new Lobby, lobby)))
			);
	}

	public getOne(id:string, getMembers?:boolean):Observable<Lobby>{
		return this.collectionService.getOne(id)
			.snapshotChanges()
			.pipe(
				switchMap(snapshot => {
					let result = Object.assign(new Lobby, GetLobbyService.convertDate(snapshot.payload.data()));
					result.id = snapshot.payload.id;
					if(getMembers){
						return forkJoin(
							result.members.map(id => this.userService.getUser(id)))
							.pipe(
								map((users:User[])=>{
									result.members = users;
									return result;
								})
							);
					}

					return result;
				}),
				map(lobby => Object.assign(new Lobby, lobby))
			);
	}

	private static convertDate(data){
		data.creationDate = data.creationDate.toDate();
		return data;
	}
}
