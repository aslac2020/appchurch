export class Dizimos {
  idDizimo?: number;
  idMembro?: number;
  dataDizimo?: Date;
  valor?: number;
  formaPagamento?: string;
  observacao?: string;
  dizimoDoMembro?: RelatorioDizimoMembro;
}

export class RelatorioDizimoMembro {
  idMembro?: number;
  codMembro?: string;
  nome?: string;
  dataNascimento?: Date;
  email?: string;
  cpf?: string;
  cnpj?: string | null;
  telefone?: string;
  estadoCivil?: string;
}
