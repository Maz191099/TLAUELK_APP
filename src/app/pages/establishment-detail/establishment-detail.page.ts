import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EstablishmentService } from 'src/app/services/establishment.service';
import { Establishment, Producto } from '../../interfaces/interfaces';

@Component({
  selector: 'app-establishment-detail',
  templateUrl: './establishment-detail.page.html',
  styleUrls: ['./establishment-detail.page.scss'],
})
export class EstablishmentDetailPage implements OnInit {
  id = null;
  habilitado = true;
  productos: Producto [] = [];
  @Input() establishment: Establishment = {};
  constructor(
              private activatedRoute: ActivatedRoute,
              private establishmentServices: EstablishmentService,
              ) { }

  ngOnInit() {
    this.id =  this.activatedRoute.snapshot.paramMap.get('id');
    this.establishmentServices.getProductByID(this.id).subscribe(resp=>{
      let longitud = Object.keys(resp).length-1
      for (let i = 0; i <= longitud; i++) {
        this.productos.push(resp[i]);
      }
      console.log(this.productos);
    });
    this.establishmentServices.getEstablishmentByID(this.id).subscribe(resp=>{
      this.establishment = resp;
    });

    
  }

  
  

}
