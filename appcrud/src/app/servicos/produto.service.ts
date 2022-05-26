import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Produto{
  id: number;
  descricao: string;
  valor: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private url = 'http://localhost/apiAppCrud/apiCliente.php';


  constructor( private http: HttpClient) { }

  getAll(){
    return this.http.get<[Produto]>(this.url);
  }

  remove(id: any){
    return this.http.delete(this.url+'?id=' + id);
  }

  create(produto: Produto){
    return this.http.post(this.url, produto);
  }

  update(produto: Produto, id: any){
    return this.http.put(this.url+'?id' + id, produto);
  }


}
