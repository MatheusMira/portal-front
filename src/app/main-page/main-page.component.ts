import { Component } from '@angular/core';
import { AppService } from '../app-service.service';
import { Noticia } from '../interfaces/noticia-interface';

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  ultimasNoticias: Noticia[] = [];
  noticias:Noticia[] = [];

  //Itens para a paginação
  currentPage: number = 1;
  pageSize: number = 5;
  totalPages: number = 0;

  constructor(
    private service: AppService
  ){
    this.noticias = this .newsList;
    this.totalPages = Math.ceil(this.noticias.length / this.pageSize);
    this.updatePage();
  }

  ngOnit(){

  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePage();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePage();
    }
  }

  updatePage() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.ultimasNoticias = this.noticias.slice(startIndex, endIndex);
  }

  newsList = [
    {
      titulo: 'Título da Notícia 1',
      conteudo: 'Descrição da notícia 1...'
    },
    {
      titulo: 'Título da Notícia 2',
      conteudo: 'Descrição da notícia 2...'
    },
    {
      titulo: 'Título da Notícia 3',
      conteudo: 'Descrição da notícia 3...'
    },
    {
      titulo: 'Título da Notícia 4',
      conteudo: 'Descrição da notícia 4...'
    },
    {
      titulo: 'Título da Notícia 5',
      conteudo: 'Descrição da notícia 5...'
    },
    {
      titulo: 'Título da Notícia 6',
      conteudo: 'Descrição da notícia 6...'
    },
    {
      titulo: 'Título da Notícia 7',
      conteudo: 'Descrição da notícia 7...'
    },
    {
      titulo: 'Título da Notícia 8',
      conteudo: 'Descrição da notícia 8...'
    },
    {
      titulo: 'Título da Notícia 9',
      conteudo: 'Descrição da notícia 9...'
    },
    {
      titulo: 'Título da Notícia 10',
      conteudo: 'Descrição da notícia 10...'
    },
    {
      titulo: 'Título da Notícia 11',
      conteudo: 'Descrição da notícia 11...'
    },
    {
      titulo: 'Título da Notícia 12',
      conteudo: 'Descrição da notícia 12...'
    },
    {
      titulo: 'Título da Notícia 13',
      conteudo: 'Descrição da notícia 13...'
    },
    {
      titulo: 'Título da Notícia 14',
      conteudo: 'Descrição da notícia 14...'
    },
    {
      titulo: 'Título da Notícia 15',
      conteudo: 'Descrição da notícia 15...'
    }
  ];

}
