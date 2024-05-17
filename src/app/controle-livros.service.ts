import { Injectable } from '@angular/core';
import { Livro } from './livro';
import { FormsModule } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})



export class ControleLivrosService {
  public livros: Array<Livro> = [
    { codigo: 1, 
      codEditora: 1, 
      titulo: 'Menino Maluquinho',
      resumo: 'Este é o resumo do Menino Maluquinho',
      autores: ['Autor A', 'Autor B']
    },
    { 
      codigo: 2, 
      codEditora: 2, 
      titulo: 'Iracema',
      resumo: 'Este é o resumo do livro Iracema',
      autores: ['Autor D', 'Autor G'],
    },
    {
      codigo: 3, 
      codEditora: 3, 
      titulo: 'Biografia - Bill Gates',
      resumo: 'Este é o resumo da Biografia do Bill Gates',
      autores: ['Autor 1', 'Autor 2'],
    }
  ];

  constructor() {

  }
  obterLivros(): Livro[]{
    return this.livros; 
  }

  incluir = (novoLivro: Livro): void => {
    const novoCodigo = this.livros.reduce((max, livro) => Math.max(max, livro.codigo), 0) + 1;
    novoLivro.codigo = novoCodigo;
    console.log(novoLivro);
    this.livros.push(novoLivro); 
  }
  excluir = (codigo: number): void => { 
    const indexLivro = this.livros.findIndex(e => e.codigo === codigo);
    if (indexLivro !== -1){
      this.livros.splice(indexLivro, 1); 
    } 
  }
  
}
