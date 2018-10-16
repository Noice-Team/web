import { Injectable } from '@angular/core';

import { AngularFirestoreCollection } from '@angular/fire/firestore';

import { ObjectsUtilsService } from '../../../services';
import { ModelsModule } from '../../models.module';
import { CollectionProviderService } from '../collection-provider.service';
import { CreateInput } from './create-input';
import { Lobby } from '../lobby.model';

@Injectable({
  providedIn: ModelsModule
})
export class CreateLobbyService {
	private collection:AngularFirestoreCollection<Lobby>;

	constructor(
		private objectsUtils:ObjectsUtilsService,
		collectionService:CollectionProviderService) {
			this.collection = collectionService.get();
		}

		public create(input:CreateInput){
			return this.collection.add(this.objectsUtils.toPOJO(input, {_members:[]}));
		}
}
