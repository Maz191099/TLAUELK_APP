import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Establishments } from '../interfaces/interfaces';
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
}
