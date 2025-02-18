export class IgrejasRegional {
  IdIgreja?: number;
  CodIgreja?: string;
  Nome?: string;
  Telefone?: string;
  Email?: string;
  IdEndereco?: number;
  Aluguel?: boolean;
  ValorAluguel?: number | null;
  EnderecoDaIgreja?: Endereco | null;
  DataPagamentoAluguel: Date | null = null;
  IdIgrejaSetor?: number | null;
}

export class IgrejasRegionalSemEndereco {
  IdIgreja?: number;
  CodIgreja?: string;
  Nome?: string;
  Telefone?: string;
  Email?: string;
  IdEndereco?: number;
  Aluguel?: boolean;
  ValorAluguel?: number | null;
  EnderecoDaIgreja?: Endereco | null;
  DataPagamentoAluguel: Date | null = null;
  IdIgrejaSetor?: number | null;
}

export class Endereco {
  Id_Endereco?: number;
  Cep?: string;
  Logradouro?: string;
  Numero?: string;
  Complemento?: string;
  Bairro?: string;
  Cidade?: string;
  Estado?: string;
}
