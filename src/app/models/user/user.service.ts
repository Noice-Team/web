import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService{
  private static get COLLECTION_NAME(){ return 'Users';};

  private userCollection: AngularFirestoreCollection<User>;

  public constructor(
    private afStore: AngularFirestore){
    this.userCollection = this.afStore.collection<User>(UserService.COLLECTION_NAME);
  }

  public create(id:string, name:string){
    return this.userCollection.add({id:id, name:name});
  }
}
