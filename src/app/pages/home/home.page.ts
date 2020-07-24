import { Component, OnInit } from '@angular/core';
import { EstablishmentService } from 'src/app/services/establishment.service';
import { Establishment, Slide } from '../../interfaces/interfaces';
import { range } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  establishment: Establishment [] = [];
  slides: Slide [] = [];
  textoBuscar: string ='';
  constructor(private establishmentServices: EstablishmentService) {}

  ngOnInit(){
    this.establishmentServices.getEstablishment().subscribe(resp=>{
      let longitud = Object.keys(resp).length-1
      for (let i = 0; i <= longitud; i++) {
        this.establishment.push(resp[i]);
      }
    });
    this.establishmentServices.getSlide().subscribe(resp =>{
                    let longitud = Object.keys(resp).length-1
                    for (let i = 0; i <= longitud; i++) {
                      this.slides.push(resp[i]);
                    }
                    console.log(this.slides);
                  });
  }
  
  buscar(event){
    this.textoBuscar = event.detail.value;
  }

}
