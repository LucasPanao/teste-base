import { Component, OnInit } from '@angular/core';
import { TestebaseService } from './testebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'teste-base';
  newTitle = 'AAAAAAAAAAAAAAAAAAAA';
  newNewTitle: any

  constructor(private testebaseService: TestebaseService) { }

  ngOnInit(){
    this.testebaseService.read_livros().subscribe(data => {
      this.newNewTitle = data.map(e => {
      return{
        id: e.payload.doc.id,
        isEdit: false,
        title: e.payload.doc.data()['titulo'] || null,
      };
      })
      console.log(this.newNewTitle);
      });

      this.CreateRecord({title: 'Bras Cubaz'})
      }

  createTitulo(title: any){
    this.newTitle = title;
  }

  CreateRecord(record: any){
    this.testebaseService.create_NewLivro(record).then(resp => {
      this.newNewTitle="";
      console.log(resp);
    })
    .catch(error => {
      console.log('erro' + error);
    });
  }
}
