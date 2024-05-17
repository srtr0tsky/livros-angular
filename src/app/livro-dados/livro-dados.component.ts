import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';
import { Router } from '@angular/router';
import { Livro } from '../livro';
import { Editora } from '../editora';

@Component({
  selector: 'app-livro-dados',
  standalone: false,
  templateUrl: './livro-dados.component.html',
  styleUrl: './livro-dados.component.css'
})
export class LivroDadosComponent implements OnInit {
  public livro: Livro; 
  public autoresForm: string = '';
  public editoras: Array<Editora> = [];
  private servEditora: ControleEditoraService;
  private servLivros: ControleLivrosService;
  private router: Router;

  constructor(
    servEditora: ControleEditoraService,
    servLivros: ControleLivrosService, 
    router: Router,
    ){
      this.servEditora = servEditora;
      this.servLivros = servLivros;
      this.router = router;
      this.livro = new Livro(0, 0, '', '', []);
    }
  ngOnInit(): void{
    this.editoras = this.servEditora.getEditoras(); 
  }
  incluir = (): void => {
    this.livro.autores = this.autoresForm.split('\n');
    this.servLivros.incluir(this.livro);
    this.router.navigateByUrl('/lista');
  }
  
  
}