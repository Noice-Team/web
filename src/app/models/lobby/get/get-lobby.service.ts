import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

import { CollectionProviderService } from '../collection-provider.service';
import { Lobby } from '../lobby.model';

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
					let result = Object.assign(new Lobby, GetLobbyService.convertDate(snapshot.payload.doc.data()));
					result.id = snapshot.payload.doc.id;
					return result;
				}))
			);
	}

	public getOne(id:string):Observable<Lobby>{
		return this.collectionService.getOne(id)
			.snapshotChanges()
			.pipe(
				map(snapshot => {
					let result = Object.assign(new Lobby, GetLobbyService.convertDate(snapshot.payload.data()));
					result.id = snapshot.payload.id;
					return result;
				})
			);
	}

	private static convertDate(data){
		data._creationDate = data._creationDate.toDate();
		return data;
	}
}
