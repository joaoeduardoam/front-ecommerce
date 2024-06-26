
// Importar o Injectable para prover a injeção de dependência
import { Injectable } from '@angular/core';

// Importar o HttpClient
import { HttpClient } from '@angular/common/http';

// Importar o modelo de produto
import { Product } from '../model/Product';

// Importar o RxJS
import { Observable } from 'rxjs';

// Configuração do @Injectable
@Injectable({
  providedIn: 'root'
})

// Classe
export class ProductService {

  // URL da API
  url:string = 'http://localhost:3000/products';

  // Primeiro método a ser executado quando referenciada a classe de serviço
  constructor(private http:HttpClient) { }

  // Método para selecionar produtos
  select():Observable<Product[]>{
    return this.http.get<Product[]>(this.url);
  }

  // Método para cadastrar produtos
  save(obj:Product):Observable<Product>{
    return this.http.post<Product>(this.url, obj);
  }

  // Método para alterar produtos
  update(obj:Product):Observable<Product>{
    return this.http.put<Product>(`${this.url}/${obj.id}`, obj);
  }

  // Método para remover produtos
  remove(id:number):Observable<any>{
    return this.http.delete<any>(`${this.url}/${id}`);
  }
} 