import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

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
    let user:User = new User();
    user.id = id;
    user.name = name;
    return this.userCollection.doc(user.id).set(Object.assign({}, user));
  }

  public getUser(id:string): Observable<User>{
    return this.userCollection.doc(id).get()
    .pipe(
      map(document => {
        if(document.exists){
          return Object.assign(new User(), document.data())
        }
        throw new Error('user.notfound');
      })
    );
  }
}
