import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UIServicesService {

  constructor(private alertCtrl: AlertController) { }
  
  async alertaInfo(message: string){
    const alert = await this.alertCtrl.create({
      message,
      buttons: ['Ok']
    });
    await alert.present();
  }
}
