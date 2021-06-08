import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../services/photo.service';

@Component({
  selector: 'app-ps5-news-page',
  templateUrl: './ps5-news-page.page.html',
  styleUrls: ['./ps5-news-page.page.scss'],
})
export class Ps5NewsPagePage implements OnInit {

  constructor(public photoService: PhotoService) { }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }
  ngOnInit() {
  }

}
