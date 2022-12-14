import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http:HttpClient) { }

  getClients(){
    let url = `http://localhost:3000/clientes`
    return this.http.get(url);
  }
}
