import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';
import { Editora } from '../editora';
import { Livro } from '../livro';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-livro-lista',
  standalone: false,
  templateUrl: './livro-lista.component.html',
  styleUrl: './livro-lista.component.css'
})

export class LivroListaComponent implements OnInit {
  public editoras: Array<Editora> = []; 
  public livros: Array<Livro> = [];
  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService){

    }
  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
    this.livros = this.servLivros.obterLivros(); 
  }

  excluir = (codigo: number) => {
    this.servLivros.excluir(codigo); 
    this.livros = this.servLivros.obterLivros(); 
  }

  obterNome = (codEditora: any) => {
    codEditora = parseInt(codEditora, 10); 
    return this.servEditora.getEditora(codEditora); 
  }
}
 

