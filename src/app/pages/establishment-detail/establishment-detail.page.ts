import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EstablishmentService } from 'src/app/services/establishment.service';
import { Establishment, Producto, Commentary } from '../../interfaces/interfaces';

@Component({
  selector: 'app-establishment-detail',
  templateUrl: './establishment-detail.page.html',
  styleUrls: ['./establishment-detail.page.scss'],
})
export class EstablishmentDetailPage implements OnInit {
  id = null;
  habilitado = true;
  mostrarProductos: boolean = true;
  mostrarComentarios: boolean = true;
  productos: Producto [] = [];
  comentarios: Commentary [] = [];
  @Input() establishment: Establishment = {};
  constructor(
              private activatedRoute: ActivatedRoute,
              private establishmentServices: EstablishmentService,
              ) { }

  ngOnInit() {
    this.id =  this.activatedRoute.snapshot.paramMap.get('id');
    // Optener productos
    this.establishmentServices.getProductByID(this.id).subscribe(resp=>{
      let longitud = Object.keys(resp).length
      if (longitud <1){
        this.mostrarProductos = false; 
      }
      for (let i = 0; i <= longitud-1; i++) {
        this.productos.push(resp[i]);
      }
    });

    // Optener productos
    this.establishmentServices.getCommentaryByID(this.id).subscribe(resp=>{
      let longitud = Object.keys(resp).length
      if (longitud <1){
        this.mostrarComentarios = false; 
      }
      for (let i = 0; i <= longitud-1; i++) {
        this.comentarios.push(resp[i]);
      }
      console.log(this.comentarios);
    });

    // Optener establecimiento por id
    this.establishmentServices.getEstablishmentByID(this.id).subscribe(resp=>{
      this.establishment = resp;
    });

    
  }

  
  

}
