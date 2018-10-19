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
			return this.collectionService.get(ref => ref.orderBy("_size").startAt(start).limit(size))
				.snapshotChanges()
				.pipe(
					map(snapshots => snapshots.map(
						snapshot => Object.assign(new Lobby, snapshot.payload.doc.data())
					)),
				);
		}
}
