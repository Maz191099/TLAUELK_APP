import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-image-model',
  templateUrl: './image-model.page.html',
  styleUrls: ['./image-model.page.scss'],
})
export class ImageModelPage implements OnInit {
  img: any;
  constructor(
    private navParams: NavParams,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.img = this.navParams.get('img');
  }
  slideOpts ={
    zoom: {
      maxRation: 3
    }
  };

  close(){
    this.modalCtrl.dismiss();
  }

}
