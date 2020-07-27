import { Component, OnInit } from '@angular/core';
import { EstablishmentService } from 'src/app/services/establishment.service';
import { Producto } from 'src/app/interfaces/interfaces';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {
  productos: Producto [] = [];
  textoBuscar: string ='';
  constructor(private establishmentServices: EstablishmentService,
              private navCtrl: NavController
              ) { }

  ngOnInit() {
    this.establishmentServices.getProducts().subscribe(resp=>{
      let longitud = Object.keys(resp).length-1
      for (let i = 0; i <= longitud; i++) {
        this.productos.push(resp[i]);
      }
    });
    
  }
  buscar(event){
    this.textoBuscar = event.detail.value;
  }
  mostrarProducto( ID ) {
    this.navCtrl.navigateRoot(['/detalle-producto', ID], {animated: true});
  }
   

}
