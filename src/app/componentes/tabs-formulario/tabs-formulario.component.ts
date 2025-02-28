import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cep } from 'src/app/model/Endereco';
import { Membros } from 'src/app/model/Membros';
import { MembrosFormularioComponent } from "../../membros/membros-formulario/membros-formulario.component";
import { IgrejasRegional } from 'src/app/model/IgrejasRegionais';

@Component({
  selector: 'app-tabs-formulario',
  templateUrl: './tabs-formulario.component.html',
  styleUrls: ['./tabs-formulario.component.scss'],
})
export class TabsFormularioComponent implements OnInit {
  title: string | any;
  formulario: FormGroup | any;
  formularioEnderecoMembro: Cep | any;
  formularioMembro: Membros | any;
  formularioIgrejaMembroRegional: IgrejasRegional | any;
  urlMembro: boolean | any;

  constructor(
    private fb: FormBuilder,
    private router: Router,

  ) { }

  ngOnInit(): void {
    this.setarTitulosEvalidacoes();
     this.iniciarFormularioMembro();
    this.iniciarFormularioEndereco();
    this.iniciarFormularioIgrejaMembro();
  }

  iniciarFormularioMembro() {
    this.formulario = this.fb.group({
      nome: [''],
      email: [''],
      telefone: [''],
      cpf: [''],
      estadoCivil: [''],
      dataNascimento: [''],
      idIgreja: [''],
    });

  }

  iniciarFormularioEndereco() {
    this.formulario = this.fb.group({
      cep: [''],
      logradouro: [''],
      complemento: [''],
      bairro: [''],
      cidade: [''],
      estado: [''],
      localidade: [''],
      numero: ['']
    });
  }

  iniciarFormularioIgrejaMembro() {
    this.formulario = this.fb.group({
      nome: [''],
      telefone: [''],
      email: [''],
      valorAluguel: [''],
      dataPagamentoAluguel: [''],
      aluguel: ['']
    });
  }

  receberTituloCard(titulo: string | any) {
    this.title = titulo;
  }

  receberEndereco(endereco: Cep | any) {
      this.formularioEnderecoMembro = endereco;
  }

  receberDadosIgrejaRegional(igrejaRegional: IgrejasRegional | any) {
    this.formularioIgrejaMembroRegional = igrejaRegional;
  }





  setarTitulosEvalidacoes(){
    this.urlMembro = this.router.url.includes('membros/cadastro');
    if(this.urlMembro){
      this.title = 'Cadastro de Membros';
    }else{
      this.title = 'Cadastro de Endereço';
  }
}



}
