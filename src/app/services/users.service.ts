import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
import { environment } from '../../environments/environment';
import { Storage } from '@ionic/storage';
const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient, 
              private storage: Storage ) { }
  token: string = null;
  
  
  login(username: string, password: string){
    const data = {username, password};
    this.http.post(`${URL}login/`, data )
                  .subscribe(resp => {
                    console.log(resp);
                    if (!resp['ok']){
                      this.guardarToken(resp['token']);
                    } else{
                      this.token = null;
                      this.storage.clear();
                    }
                  });
  }

  async guardarToken(token: string){
    this.token = token;
    await this.storage.set('token', token);
  }
}

