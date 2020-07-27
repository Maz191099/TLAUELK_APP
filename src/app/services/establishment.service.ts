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
  //Obtener los establecimientos 
  getEstablishment(){
      return this.http.get(`${URL}establishment/`);
  }
  //Obtener establecimiento por ID
  getEstablishmentByID(ID){
    return this.http.get(`${URL}establishment/${ID}/`);
  }
  //Obtener productos por ID de establecimiento
  getProductByID(ID){
    return this.http.get(`${URL}producto/${ID}/elements/`);
  }
  //Obtener comentarios por ID de establecimiento
  getCommentaryByID(ID){
    return this.http.get(`${URL}commentary/${ID}/elements/`);
  }
  //Generar comentarios 
  postCommentary(commentary){
    return new Promise( resolve => {
      this.http.post(`${URL}commentary/`, commentary) 
        .subscribe( resp =>{
        resolve(true);
        });
    });
  }
  //Optener imagenes para el slide
  getSlide(){
    return this.http.get(`${URL}gallery/`);
  }
  getProductID(ID){
    return this.http.get(`${URL}producto/${ID}/`);
  }
}
