import { Injectable } from '@angular/core';
import firebase from "firebase/app";
import "firebase/database";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor() { }

  getDoc(ref){
    return firebase.database().ref(ref).get();
  }
  updateDoc(ref, obj){
    return firebase.database().ref(ref).update(obj);
  }
  incDb(path){
    return firebase.database().ref(path).update({last_id: firebase.database.ServerValue.increment(1)});
  }
  incDbValue(path, value: number){
    return firebase.database().ref(path).update({grade: firebase.database.ServerValue.increment(value)});
  }
  incDbValueSpeFir(path, value: number, total: number){
    return firebase.database().ref(path).update({grade: firebase.database.ServerValue.increment(value), total: firebase.database.ServerValue.increment(total)});
  }
  setDoc(path, object) {
    return firebase.database().ref(path).set(object);
  }
  removeDoc(path) {
    return firebase.database().ref(path).remove();
  }
  incDbValueNew(path, value: number){
    return firebase.database().ref(path).update({total: value});
  }
}
