import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TestebaseService {
  constructor(private firestore: AngularFirestore) {}

  create_NewLivro(record: any) {
    return this.firestore.collection('livro').add(record);
  }

  read_livros(): Observable<DocumentChangeAction<any>[]> {
    return this.firestore.collection('livro').snapshotChanges();
  }
}
