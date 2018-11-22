import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { AngularFireAuth } from '@angular/fire/auth';

import { from } from 'rxjs';
import { map, switchMap  } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';

import { ObjectsUtilsService } from '../../../services';
import { CreateLobbyInput } from './create-lobby-input';
import { LobbyDb } from '../lobby.db.model';

@Injectable({
  providedIn: 'root'
})
export class CreateLobbyService {

	constructor(
		private objectsUtils:ObjectsUtilsService,
		private http: Http,
	    private afAuth: AngularFireAuth){}

		public create(input:CreateLobbyInput){


			return from(this.afAuth.auth.currentUser.getIdToken(false))
			.pipe(
				switchMap(token => {
					const httpOptions = {
					  headers: new Headers({
					    'Content-Type':  'application/json',
					    'FIREBASE_ID_TOKEN': token
					  })
					};

					return this.http.post(environment.urls.lobbies+"lobbies",
						this.objectsUtils.toPOJO(input, {},(key) => key.startsWith("_")), httpOptions)
						.pipe(map(response => {
							let lobby = new LobbyDb();
							Object.assign(lobby, response.json());
							return lobby;
					}));
				})
			);
			/*.add()
			.then(u => {
				u.collection(CollectionProviderService.COLLECTION_MEMBERS).add({_user:input.owner});
				return u;
			});*/
		}
}
