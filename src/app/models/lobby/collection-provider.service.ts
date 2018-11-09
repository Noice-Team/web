import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection,
	 	AngularFirestoreDocument, QueryFn } from '@angular/fire/firestore';

import { LobbyDb } from './lobby.db.model';

@Injectable({
  providedIn: 'root'
})
export class CollectionProviderService {

	public static get COLLECTION_NAME(){ return 'Lobbies';};
	public static get COLLECTION_MEMBERS(){ return 'Members';};

	public constructor(
		private afStore: AngularFirestore){
	}

	public getOne(id:string): AngularFirestoreDocument<LobbyDb>{
		return this.afStore.collection<LobbyDb>(CollectionProviderService.COLLECTION_NAME).doc(id)
	}

	public getMany(queryFn?:QueryFn): AngularFirestoreCollection<LobbyDb>{
		return this.afStore.collection<LobbyDb>(CollectionProviderService.COLLECTION_NAME, queryFn);
	}
}
