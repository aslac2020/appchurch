import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getAllChurchs() {
    return this.httpClient.get(`${environment.apiUrl}/Igrejas`);
  }

  getChurchById(id: number | any){
    return this.httpClient.get(`${environment.apiUrl}/Igrejas/${id}`);
  }

  getAllMembers(){
    return this.httpClient.get(`${environment.apiUrl}/Membros`);
  }
  getMemberById(id: number | any){
    return this.httpClient.get(`${environment.apiUrl}/Membros/${id}`);
  }

  getAllMembersBirthdays(){
    return this.httpClient.get(`${environment.apiUrl}/Membros/aniversariantes`);
  }

  getAllChurchSetors(){
    return this.httpClient.get(`${environment.apiUrl}/IgrejasSetores`);
  }

  getChurchSetorById(id: number | any){
    return this.httpClient.get(`${environment.apiUrl}/IgrejasSetores/${id}`);
  }

  getAllCongregacoes(){
    return this.httpClient.get(`${environment.apiUrl}/IgrejasCongregacionais`);
  }

  getEnderecoByCep(cep: string){
    return this.httpClient.get(`https://viacep.com.br/ws/${cep}/json/`);
  }
}
