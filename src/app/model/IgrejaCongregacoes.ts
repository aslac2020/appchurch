export class IgrejasCongregacoes {
  IdIgrejaCongregacao?: number;
  CodIgreja?: string;
  Nome?: string;
  Telefone?: string;
  Email?: string;
  IdEndereco?: number;
  Aluguel?: boolean;
  ValorAluguel?: number | null;
  DataPagamentoAluguel?: Date | null = null;
  IdIgrejaSetor?: number | null;
  EnderecoDaIgreja?: EnderecoCongregacao;
}

export class IgrejasCongregacoesSemEndereco {
  idIgrejaCongregacao?: number;
  codIgreja?: string;
  nome?: string;
  telefone?: string;
  email?: string;
  idEndereco?: number;
  aluguel?: boolean;
  valorAluguel?: number | null;
  dataPagamentoAluguel?: Date | null = null;
  idIgrejaSetor?: number | null;
}

export class EnderecoCongregacao {
  Id_Endereco?: number;
  Cep?: string;
  Logradouro?: string;
  Numero?: string;
  Complemento?: string;
  Bairro?: string;
  Cidade?: string;
  Estado?: string;
}

