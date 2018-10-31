import { Injectable } from '@angular/core';

import { AngularFirestoreCollection } from '@angular/fire/firestore';

import { ObjectsUtilsService } from '../../../services';
import { CollectionProviderService } from '../collection-provider.service';
import { CreateLobbyInput } from './create-lobby-input';
import { Lobby } from '../lobby.model';

@Injectable({
  providedIn: 'root'
})
export class CreateLobbyService {
	private collection:AngularFirestoreCollection<Lobby>;

	constructor(
		private objectsUtils:ObjectsUtilsService,
		collectionService:CollectionProviderService) {
			this.collection = collectionService.getMany();
		}

		public create(input:CreateLobbyInput){
			return this.collection.add(this.objectsUtils.toPOJO(input, {_members:[input.owner], _creationDate:new Date()},
				(key) => key.startsWith("_")));
		}
}
