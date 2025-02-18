import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';
import { Cep } from '../model/Endereco';

@Component({
  selector: 'app-cadastro-endereco',
  templateUrl: './cadastro-endereco.component.html',
  styleUrls: ['./cadastro-endereco.component.scss']
})
export class CadastroEnderecoComponent implements OnInit {
formulario!: FormGroup;
@Output() receberEndereco = new EventEmitter();


  constructor(
    private fb: FormBuilder,
    private apiService: ApiService

  ) { }

  ngOnInit() {
    this.iniciarFormulario();
  }


  iniciarFormulario() {
    this.formulario = this.fb.group({
      cep: [''],
      logradouro: [''],
      complemento: [''],
      bairro: [''],
      cidade: [''],
      estado: [''],
      localidade: [''],
      numero:['']
    });
  }

  buscarCep() {
    const cep = this.formulario.get('cep')?.value;
    this.apiService.getEnderecoByCep(cep).subscribe((endereco: Cep | any) => {
      this.receberEndereco.emit(endereco);
      this.formulario.patchValue({
        logradouro: endereco.logradouro,
        complemento: endereco.complemento,
        bairro: endereco.bairro,
        cidade: endereco.localidade,
        estado: endereco.uf,
      });
    });
  }


}
