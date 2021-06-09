import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../services/photo.service';
@Component({
  selector: 'app-covid-news-page',
  templateUrl: './covid-news-page.page.html',
  styleUrls: ['./covid-news-page.page.scss'],
})
export class CovidNewsPagePage implements OnInit {

  constructor(public photoService: PhotoService) {
  }
  ngOnInit() {
  }
}
