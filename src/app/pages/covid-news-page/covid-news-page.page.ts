import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../services/photo.service';
import { ToastController } from '@ionic/angular';

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

  ngOnInit() {
  }
}
