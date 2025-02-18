import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro-igreja',
  templateUrl: './cadastro-igreja.component.html',
  styleUrls: ['./cadastro-igreja.component.scss']
})
export class CadastroIgrejaComponent implements OnInit {
  formulario: FormGroup | any;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.iniciarFormulario();
  }

  iniciarFormulario() {
    this.formulario = this.fb.group({
      nome: [''],
      cnpj: [''],
      telefone: [''],
      email: [''],
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


}
