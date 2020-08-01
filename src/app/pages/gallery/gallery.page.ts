import { Component, OnInit } from '@angular/core';
import { EstablishmentService } from 'src/app/services/establishment.service';
import { Establishment, Slide, Promotion } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { ImageModelPage } from '../image-model/image-model.page';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {
  slides: Slide [] = [];
  promotions: Promotion [] = [];
  slideOpts ={
    zoom: false,
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween:20
  }
  constructor(
            private establishmentServices: EstablishmentService,
            private modalCtrl: ModalController) {}

  ngOnInit() {
    this.establishmentServices.getSlide().subscribe(resp =>{
      let longitud = Object.keys(resp).length-1
      for (let i = 0; i <= longitud; i++) {
        this.slides.push(resp[i]);
      }
    });
    this.establishmentServices.getPromotions().subscribe(resp =>{
      let longitud = Object.keys(resp).length-1
      for (let i = 0; i <= longitud; i++) {
        this.promotions.push(resp[i]);
      }
      console.log(this.promotions);
    });
  }
  onViewImage(img){
    this.modalCtrl.create({
      component:ImageModelPage,
      componentProps:{
        img: img 
      }
    }).then(modal => modal.present());
  }

}
