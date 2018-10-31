import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection,
	 	AngularFirestoreDocument, QueryFn } from '@angular/fire/firestore';

import { Lobby } from './lobby.model';

@Injectable({
  providedIn: 'root'
})
export class CollectionProviderService {

	private static get COLLECTION_NAME(){ return 'Lobbies';};

	public constructor(
		private afStore: AngularFirestore){
	}

	public getOne(id:string): AngularFirestoreDocument<Lobby>{
		return this.afStore.collection<Lobby>(CollectionProviderService.COLLECTION_NAME).doc(id)
	}

	public getMany(queryFn?:QueryFn): AngularFirestoreCollection<Lobby>{
		return this.afStore.collection<Lobby>(CollectionProviderService.COLLECTION_NAME, queryFn);
	}
}
