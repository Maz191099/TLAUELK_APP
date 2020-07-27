import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EstablishmentService } from 'src/app/services/establishment.service';
import { Producto } from '../../interfaces/interfaces';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
  id = null;
  producto: Producto = {};
  constructor(private activatedRoute: ActivatedRoute,
    private establishmentServices: EstablishmentService,
    private navCtrl: NavController, ) { }

  ngOnInit() {
    this.id =  this.activatedRoute.snapshot.paramMap.get('id');
    this.establishmentServices.getProductID(this.id).subscribe(resp=>{
      this.producto = resp;
    });
    
  }

  mostrarEstablecimiento( ID ) {
    this.navCtrl.navigateRoot(['/establishment-detail', ID], {animated: true});
  }

}
