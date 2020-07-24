import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Establishments, Commentary } from '../interfaces/interfaces';
const URL = environment.url;
@Injectable({
  providedIn: 'root'
})
export class EstablishmentService {

  constructor(private http: HttpClient) { }

  getEstablishment(){
      return this.http.get(`${URL}establishment/`);
  }
  getEstablishmentByID(ID){
    return this.http.get(`${URL}establishment/${ID}/`);
  }
  getProductByID(ID){
    return this.http.get(`${URL}producto/${ID}/elements/`);
  }
  getCommentaryByID(ID){
    return this.http.get(`${URL}commentary/${ID}/elements/`);
  }
  postCommentary(commentary){
    return new Promise( resolve => {
      this.http.post(`${URL}commentary/`, commentary) 
        .subscribe( resp =>{
        resolve(true);
        });
    });
  }

}
