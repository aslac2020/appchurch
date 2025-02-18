export class IgrejasSetores {
  IdIgrejaSetor?: number;
  CodIgreja?: string;
  Nome?: string;
  Telefone?: string;
  Email?: string;
  IdEndereco?: number;
  Aluguel?: boolean;
  ValorAluguel?: number | null;
  DataPagamentoAluguel?: Date | null = null;
  IdIgrejaRegional?: number | null;
  EnderecoDaIgreja?: EnderecoSetores;

  constructor() {
      this.EnderecoDaIgreja = new EnderecoSetores();
  }
}

export class IgrejasSetoresSemEndereco {
  idIgrejaSetor?: number;
  codIgreja?: string;
  nome?: string;
  telefone?: string;
  email?: string;
  idEndereco?: number;
  aluguel?: boolean;
  valorAluguel?: number | null;
  dataPagamentoAluguel?: Date | null = null;
  idIgrejaRegional?: number | null;

}

export class EnderecoSetores {
  Id_Endereco?: number;
  Cep?: string;
  Logradouro?: string;
  Numero?: string;
  Complemento?: string;
  Bairro?: string;
  Cidade?: string;
  Estado?: string;
}

