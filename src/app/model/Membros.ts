import { EnderecoIgrejas } from "./EnderecoIgrejas";
import { EnderecoCongregacao } from "./IgrejaCongregacoes";
import { EnderecoSetores } from "./IgrejaSetores";

export class Membros {
  idMembro?: number;
  CodMembro?: string;
  Nome?: string;
  DataNascimento?: Date;
  Email?: string;
  CPF?: string;
  CNPJ?: string;
  Telefone?: string;
  EstadoCivil?: string;
  Sexo?: string;
  IdEndereco?: number;
  IdHistorico?: number;
  IdIgreja?: number;
  IdIgrejaSetor?: number;
  IdIgrejaCongregacao?: number;
  EnderecoDoMembro?: EnderecoMembro;
  IgrejaDoMembro?: IgrejaMembro;
  HistoricoMinisterialDoMembro?: HistoricoMinisterialMembro;
  IgrejaDoMembroNoSetor?: IgrejasDoSetor;
  IgrejaDoMembroNaCongregacao?: IngrejaDeCongregacao;
}

export class MembrosSemEndereco {
  IdMembro?: number;
  CodMembro?: string;
  Nome?: string;
  DataNascimento?: Date;
  Email?: string;
  CPF?: string;
  CNPJ?: string;
  Telefone?: string;
  EstadoCivil?: string;
  Sexo?: string;
  IdEndereco?: number;
  IdHistorico?: number;
  IdIgreja?: number;
  IdIgrejaSetor?: number;
  IdIgrejaCongregacao?: number;
}

export class EnderecoMembro {
  IdEndereco?: number;
  Cep?: string;
  Logradouro?: string;
  Numero?: string;
  Complemento?: string;
  Bairro?: string;
  Cidade?: string;
  Estado?: string;
}

export class IgrejaMembro {
  IdIgreja?: number;
  CodIgreja?: string;
  Nome?: string;
  Telefone?: string;
  Email?: string;
  IdEndereco?: number;
  Aluguel?: boolean;
  ValorAluguel?: number;
  EnderecoDaIgreja?: EnderecoIgrejas;
  DataPagamentoAluguel?: Date | null = null;
}

export class HistoricoMinisterialMembro {
  IdHistorico?: number;
  CodHistorico?: string;
  Cargo?: string;
  Obreiro?: boolean;
  DataConversao?: Date;
  DataBatismo?: Date;
  DataBatismoEspirito?: Date;
  Dizimista?: boolean;
}

export class IgrejasDoSetor {
  IdIgrejaSetor?: number;
  CodIgreja?: string;
  Nome?: string;
  Telefone?: string;
  Email?: string;
  IdEndereco?: number;
  Aluguel?: boolean;
  ValorAluguel?: number;
  DataPagamentoAluguel?: Date | null = null;
  IdIgrejaRegional?: number;
  EnderecoDaIgreja?: EnderecoSetores;
}

export class IngrejaDeCongregacao {
  IdIgrejaCongregacao?: number;
  CodIgreja?: string;
  Nome?: string;
  Telefone?: string;
  Email?: string;
  IdEndereco?: number;
  Aluguel?: boolean;
  ValorAluguel?: number;
  DataPagamentoAluguel?: Date | null = null;
  IdIgrejaSetor?: number;
  EnderecoDaIgreja?: EnderecoCongregacao;
}

