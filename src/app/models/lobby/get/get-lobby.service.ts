import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map, switchMap } from "rxjs/operators";

import { CollectionProviderService } from '../collection-provider.service';
import { Lobby } from '../lobby.model';
import { LobbyDb } from '../lobby.db.model';

@Injectable({
  providedIn: 'root'
})
export class GetLobbyService {

	constructor(
		private collectionService:CollectionProviderService) {}

	public getAll(start?:number, size?:number):Observable<Array<Lobby>>{
		if(!start){
			start = 0;
		}
		if(!size){
			size = 30;
		}
		return this.collectionService.getMany(ref => ref.orderBy("_size").startAt(start).limit(size))
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
					result.members=[];

					if(getMembers){
						return from(snapshot.payload.ref.collection(CollectionProviderService.COLLECTION_MEMBERS).get()).pipe(
							map(subSnapshot =>{
								subSnapshot.forEach(doc => {
									result.members.push(doc.data()._user);
								});
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
		data._creationDate = data._creationDate.toDate();
		return data;
	}
}
