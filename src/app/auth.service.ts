import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { usuario } from './login/usuario';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiURL: string = environment.apiURLBase + "/api/usuarios"

  constructor(
    private http: HttpClient
  ) { }

  salvar(usuario: usuario) : Observable<any> {
    return this.http.post<any>(this.apiURL, usuario);
  }
}
