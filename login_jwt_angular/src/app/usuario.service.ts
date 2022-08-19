import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }

  postLogin(data:any){
    let url = `http://localhost:3000/login`;
    return this.http.post(url, data);
  }

 
}

