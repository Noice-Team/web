import { Injectable } from '@angular/core';

import { SessionService, ObjectsUtilsService } from '../../../services/';
import { CollectionProviderService } from '../collection-provider.service';

import { Lobby } from '../lobby.model';

@Injectable({
    providedIn: 'root'
})
export class UpdateLobbyService {


    constructor(
        private session: SessionService,
        private objectsUtils: ObjectsUtilsService,
        private collectionService: CollectionProviderService) { }

    public join(id: string): void {
        let doc = this.collectionService.getOne(id);
        let sub = doc.valueChanges().subscribe(v => {
            let subUser = this.session.user.subscribe(user => {
                v = Object.assign(new Lobby(), v);
                let updated = false;
                if (user && user.id) {
                    if (!v.members.includes(user.id)) {
                        v.members.push(user.id);
                        updated = true;
                    }
                }
                else {
                    //TODO : handle error
                    console.error("Error")
                }
                if (subUser) {
                    subUser.unsubscribe();
                }
                sub.unsubscribe();
                if (updated) {
                    doc.update(this.objectsUtils.toPOJO(v, {}, (key) => key.startsWith("_")));
                }
            });
            if (subUser) {
                subUser.unsubscribe();
            }
        });
    }
}
