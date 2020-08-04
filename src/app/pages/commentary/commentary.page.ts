import { Component, OnInit } from '@angular/core';
import { EstablishmentService } from 'src/app/services/establishment.service';
import { Establishment, Producto, Commentary } from '../../interfaces/interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { UIServicesService } from 'src/app/services/uiservices.service';
@Component({
  selector: 'app-commentary',
  templateUrl: './commentary.page.html',
  styleUrls: ['./commentary.page.scss'],
})
export class CommentaryPage implements OnInit {
  id = null;
  comentario: Commentary = {
    name: '',
    content: '',
    score: 100,
    id_establecimiento: null
  };
  
  constructor(
    private navCtrl: NavController, 
    private activatedRoute: ActivatedRoute,
    private establishmentServices: EstablishmentService,
    private route: Router,
    private uiService: UIServicesService
          ) { }

  ngOnInit() {
    this.id =  this.activatedRoute.snapshot.paramMap.get('id');
    this.comentario.id_establecimiento = this.id;
  }
  async crearCommentary(){
    if(this.comentario.name.length < 3 && this.comentario.content.length < 10){
      this.uiService.alertaInfo('Comentario invalido, ingrese un nombre con más de 3 caracteres y un mensaje con más de 10 letras.');
      return
    } if(this.comentario.name.length < 3){
      this.uiService.alertaInfo('El nombre no es válido, ingrese un nombre con más de 3 caracteres.');
      return
    } if(this.comentario.content.length < 10) {
      this.uiService.alertaInfo('El comentario no es válido, ingrese un comentario con más de 10 caracteres.');
      return
    } else{
      const creado = await this.establishmentServices.postCommentary( this.comentario);
    this.route.navigateByUrl('tabs/home');
    }
  }
  mostrarDetalle( ) {
    this.navCtrl.navigateRoot(['/establishment-detail', this.id], {animated: true});
  }

}
