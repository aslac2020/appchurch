import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { Cep } from 'src/app/model/Endereco';
import { Membros } from 'src/app/model/Membros';

interface Sexo {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-membros-formulario',
  templateUrl: './membros-formulario.component.html',
  styleUrls: ['./membros-formulario.component.scss'],

})
export class MembrosFormularioComponent implements OnInit {
membro?: Membros;
formulario!: FormGroup;
selectedValue!: string;
formularioEnderecoMembro: Cep | any;
@Output() tituloCardMembro = new EventEmitter();


sexos: Sexo[] = [
  { value: 'Feminino', viewValue: 'Feminino' },
  { value: 'Masculino', viewValue: 'Masculino' },
];


  constructor(
    private readonly fb: FormBuilder,
    private adapter: DateAdapter<any>
  ) {
    this.tituloCardMembro.emit('Cadastro de Membros');
  }

  ngOnInit() {
    this.iniciarFormulario();

  }

  iniciarFormulario() {
    this.formulario = this.fb.group({
      nome: [''],
      email: [''],
      telefone: [''],
      cpf: [''],
      estadoCivil: [''],
      dataNascimento: [''],
      endereco: [''],
      cidade: [''],
      estado: [''],
      cep: [''],
    });

  }

  receberEndereco(endereco: Cep | any) {
    this.formularioEnderecoMembro = endereco;
  }

}
