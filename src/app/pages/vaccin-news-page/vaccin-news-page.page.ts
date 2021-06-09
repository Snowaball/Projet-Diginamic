import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../services/photo.service';
import {ToastController} from '@ionic/angular';
@Component({
  selector: 'app-vaccin-news-page',
  templateUrl: './vaccin-news-page.page.html',
  styleUrls: ['./vaccin-news-page.page.scss'],
})
export class VaccinNewsPagePage implements OnInit {

  constructor(public photoService: PhotoService, public toastController: ToastController) { }

  async addPhotoToGallery() {
    await this.photoService.addNewToGallery();
    const toast = await this.toastController.create({
      message: 'Image ajoutée',
      duration: 2000
    });
    await toast.present();
  }
  ngOnInit() {
  }

}
