import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';
import { ApiService } from '../api.service';
import { Endereco, IgrejasRegional } from '../model/IgrejasRegionais';
import { IgrejaMembro } from '../model/Membros';
import { EnderecoSetores, IgrejasSetores } from '../model/IgrejaSetores';
import { EnderecoIgrejas } from '../model/EnderecoIgrejas';


interface SetoresRegional {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-cadastro-igreja',
  templateUrl: './cadastro-igreja.component.html',
  styleUrls: ['./cadastro-igreja.component.scss']
})
export class CadastroIgrejaComponent implements OnInit {
  formulario: FormGroup | any;
  @ViewChild(MatAccordion) accordion!: MatAccordion;
  @Output() receberDadosIgrejaRegional = new EventEmitter();
  setoresRegional: IgrejasSetores[] | any;
  congregaRegional = false;
  congregaSetor = false;
  congregaCongregacao = false;
  isSelectedCard = false;




  constructor(
    private fb: FormBuilder,
    private apiService: ApiService) { }

  ngOnInit(): void {
    this.iniciarFormularioIgreja();
  }

  iniciarFormularioIgreja() {
    this.formulario = this.fb.group({
      nome: [''],
      telefone: [''],
      email: [''],
      valorAluguel: [''],
      dataPagamentoAluguel: [''],
      aluguel: [''],
      cep: [''],
      rua: [''],
      numero: [''],
      bairro: [''],
      cidade: [''],
      estado: [''],
      idIgrejaSetor: [''],

    });
  }


  carregarDadosIgrejaRegional(){
    this.setarCongregacoState(false, true, false);
    this.aoSelecionarCard();

    this.apiService.getAllChurchs().subscribe((data: IgrejasRegional | any) => {
      const dadosIgreja = data[0];
      this.receberDadosIgrejaRegional.emit(dadosIgreja);
      this.atualizarFormularioIgreja(dadosIgreja);

      if(dadosIgreja.idEndereco){
        this.apiService.getChurchById(dadosIgreja.idEndereco).subscribe((data: Endereco | any) => {
          const dadosEnderecoIgreja = data;
          this.atualizarFormularioEnderecoIgreja(dadosEnderecoIgreja.enderecoDaIgreja);
        });
      }
    });
  }

  atualizarFormularioIgreja(data: IgrejaMembro | any){
    this.formulario.patchValue({
      nome: data.nome,
      telefone: data.telefone,
      email: data.email,
      valorAluguel: data.valorAluguel,
      dataPagamentoAluguel: data.dataPagamentoAluguel,
      aluguel: data.aluguel,
    });

      // Definir os campos como readonly
    this.formulario.get('nome')?.disable();
    this.formulario.get('telefone')?.disable();
    this.formulario.get('email')?.disable();
    this.formulario.get('valorAluguel')?.disable();
    this.formulario.get('dataPagamentoAluguel')?.disable();
    this.formulario.get('aluguel')?.disable();
  }

  atualizarFormularioEnderecoIgreja(data: EnderecoIgrejas | any){
    this.formulario.patchValue({
      cep: data.cep,
      rua: data.logradouro,
      numero: data.numero,
      bairro: data.bairro,
      cidade: data.cidade,
      estado: data.estado,
    });

    // Definir os campos como readonly
    this.formulario.get('cep')?.disable();
    this.formulario.get('rua')?.disable();
    this.formulario.get('numero')?.disable();
    this.formulario.get('bairro')?.disable();
    this.formulario.get('cidade')?.disable();
    this.formulario.get('estado')?.disable();
  }

  buscarSetores()  {
    this.setarCongregacoState(false, false, true);
    this.aoSelecionarCard();
    this.formulario.reset();

    this.apiService.getAllChurchSetors().subscribe((data: IgrejasSetores[] | any) => {
      if(data.length > 0){
        this.setoresRegional = data;
      }
      else {
        this.congregaSetor = false;
      }
    });
  }

  buscarCongregacoes(){
    this.setarCongregacoState(true, false, false);
    this.aoSelecionarCard();
    this.formulario.reset();



  }


  selecionadoSetor(idSetor: any){

    if(idSetor){
      this.apiService.getChurchSetorById(idSetor).subscribe((dadosSetor: IgrejasSetores | any) => {
        this.atualizarFormularioIgreja(dadosSetor);
        this.atualizarFormularioEnderecoIgreja(dadosSetor.enderecoDaIgreja);
      });
    }

  }

  setarCongregacoState(congregaCongregacao: boolean, congregaRegional: boolean, congregaSetor: boolean){
    this.congregaCongregacao = congregaCongregacao;
    this.congregaRegional = congregaRegional;
    this.congregaSetor = congregaSetor;
  }

  aoSelecionarCard(){
    this.isSelectedCard = !this.isSelectedCard;
  }









}
