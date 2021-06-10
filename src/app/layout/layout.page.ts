import {Component, OnInit} from '@angular/core';
import {PhotoService} from '../services/photo.service';
import {ToastController} from '@ionic/angular';
import {Share} from '@capacitor/share';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.page.html',
  styleUrls: ['./layout.page.scss'],
})
export class LayoutPage implements OnInit {

  constructor(public photoService: PhotoService, public toastController: ToastController) {
  }
  // Appel du service qui ouvre la caméra + ajout du toast lors de l'ajout de l'image
  async addPhotoToGallery() {
    await this.photoService.addNewToGallery();
    const toast = await this.toastController.create({
      color: 'primary',
      message: 'Image ajoutée',
      duration: 2000
    });
    await toast.present();
  }

  //fonction qui permet le partage d'un article
  async share() {
    await Share.share({
      title: 'Titre',
      text: 'Voici un article super intéréssant !',
      url: 'https://www.lemonde.fr/idees/article/2021/06/08/l-antarctique-le-symbole-de-notre-engagement-commun-dans-la-lutte-contre-la-crise-environnementale_6083342_3232.html',
      dialogTitle: 'Share',
    });
  }

  ngOnInit() {
  }

}
