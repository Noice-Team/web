import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { ModelsModule } from '../models.module';
import { Lobby } from './lobby.model';

@Injectable({
  providedIn: ModelsModule
})
export class CollectionProviderService {

	private static get COLLECTION_NAME(){ return 'Lobbies';};

	private lobbyCollection: AngularFirestoreCollection<Lobby>;

	public constructor(
    private afStore: AngularFirestore){
    this.lobbyCollection = this.afStore.collection<Lobby>(CollectionProviderService.COLLECTION_NAME);
  }

	public get(): AngularFirestoreCollection<Lobby>{
		return this.lobbyCollection;
	}
}
