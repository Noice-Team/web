import { Injectable } from '@angular/core';

import { AngularFirestoreCollection } from '@angular/fire/firestore';

import { ObjectsUtilsService } from '../../../services';
import { CollectionProviderService } from '../collection-provider.service';
import { CreateLobbyInput } from './create-lobby-input';
import { LobbyDb } from '../lobby.db.model';

@Injectable({
  providedIn: 'root'
})
export class CreateLobbyService {
	private collection:AngularFirestoreCollection<LobbyDb>;

	constructor(
		private objectsUtils:ObjectsUtilsService,
		collectionService:CollectionProviderService) {
			this.collection = collectionService.getMany();
		}

		public create(input:CreateLobbyInput){
			return this.collection.add(this.objectsUtils.toPOJO(input, {_creationDate:new Date()},
				(key) => key.startsWith("_")))
			.then(u => {
				u.collection(CollectionProviderService.COLLECTION_MEMBERS).add({_user:input.owner});
				return u;
			});
		}
}
