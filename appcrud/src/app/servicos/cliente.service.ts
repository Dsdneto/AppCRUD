import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Cliente{
  id: number;
  nome: string;
  telefone: string;
  endereco: string;
}


@Injectable({
  providedIn: 'root'
})

export class ClienteService {

  private url = 'http://localhost/apiAppCrud/apiCliente.php';

  constructor(private htpp: HttpClient) { }

  getAll(){
    return this.htpp.get<[Cliente]>(this.url);
  }

}
