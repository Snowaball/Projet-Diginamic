import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../services/photo.service';
import { ToastController } from '@ionic/angular';
import { Share } from '@capacitor/share';
@Component({
  selector: 'app-covid-news-page',
  templateUrl: './covid-news-page.page.html',
  styleUrls: ['./covid-news-page.page.scss'],
})
export class CovidNewsPagePage implements OnInit {

  constructor(public photoService: PhotoService, public toastController: ToastController) {
  }

  async addPhotoToGallery() {
    await this.photoService.addNewToGallery();
    const toast = await this.toastController.create({
      color: 'primary',
      message: 'Image ajoutée',
      duration: 2000
    });
    await toast.present();
  }
  async share(){
    await Share.share({
      title: 'Titre',
      text: 'Voici un article super intéréssant !',
      url:'https://www.lemonde.fr/idees/article/2021/06/08/l-antarctique-le-symbole-de-notre-engagement-commun-dans-la-lutte-contre-la-crise-environnementale_6083342_3232.html',
      dialogTitle: 'Share',
    });
  }


  ngOnInit() {
  }
}
