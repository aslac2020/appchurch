export class EnderecoIgrejas {
  Id_Endereco: number;
  Cep: string;
  Logradouro: string;
  Numero: string;
  Complemento: string;
  Bairro: string;
  Cidade: string;
  Estado: string;

  constructor(
      id_Endereco: number,
      cep: string,
      logradouro: string,
      numero: string,
      complemento: string,
      bairro: string,
      cidade: string,
      estado: string
  ) {
      this.Id_Endereco = id_Endereco;
      this.Cep = cep;
      this.Logradouro = logradouro;
      this.Numero = numero;
      this.Complemento = complemento;
      this.Bairro = bairro;
      this.Cidade = cidade;
      this.Estado = estado;
  }
}

