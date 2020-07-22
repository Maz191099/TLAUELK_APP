import { Component, OnInit } from '@angular/core';
import { EstablishmentService } from 'src/app/services/establishment.service';
import { Establishment } from '../../interfaces/interfaces';
import { range } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  establishment: Establishment [] = [];
  constructor(private establishmentServices: EstablishmentService) {}

  ngOnInit(){
    this.establishmentServices.getEstablishment().subscribe(resp=>{
      let longitud = Object.keys(resp).length-1
      for (let i = 0; i <= longitud; i++) {
        this.establishment.push(resp[i]);
      }
    });
  }
}
