import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EstablishmentService } from 'src/app/services/establishment.service';
import { Producto, Establishment } from '../../interfaces/interfaces';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.page.html',
  styleUrls: ['./detalle-producto.page.scss'],
})
export class DetalleProductoPage implements OnInit {
  id = null;
  producto: Producto = {};
  establishment: Establishment = {};
  constructor(private activatedRoute: ActivatedRoute,
    private establishmentServices: EstablishmentService,
    private navCtrl: NavController, ) { }

  ngOnInit() {
    this.id =  this.activatedRoute.snapshot.paramMap.get('id');
    this.establishmentServices.getProductID(this.id).subscribe(resp=>{
      this.producto = resp;
      // Optener establecimiento por id
      this.establishmentServices.getEstablishmentByID(this.producto.id_establishment).subscribe(resp=>{
        this.establishment = resp;
      });
    });
    
  }

  
  mostrarProducto() {
    this.navCtrl.navigateRoot(['/tabs/productos'], {animated: true});
  }
  
  }