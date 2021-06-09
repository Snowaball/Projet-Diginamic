import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../services/photo.service';
@Component({
  selector: 'app-vaccin-news-page',
  templateUrl: './vaccin-news-page.page.html',
  styleUrls: ['./vaccin-news-page.page.scss'],
})
export class VaccinNewsPagePage implements OnInit {

  constructor(public photoService: PhotoService) { }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }
  ngOnInit() {
  }

}
