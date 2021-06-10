import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {PhotoService} from '../../services/photo.service';
import {VibrationService} from '../../services/vibration.service';
import {News, NewsService} from '../../services/news.service';
import {IonReorderGroup} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, AfterViewInit{
  @ViewChild(IonReorderGroup) reorderGroup: IonReorderGroup;
  news: News[];
  public toggle= true;
  constructor(public photoService: PhotoService,public vibrationService: VibrationService, public newsService: NewsService) {}
  vibration(){
    this.vibrationService.vibrate();
  }
  toggleReorder(){
    if(this.toggle){
      this.toggle=false;
    }else{
      this.toggle =true;
    }
  }

  ngOnInit() {
    this.news = this.newsService.getAll();
  }

  ngAfterViewInit(): void {
    this.reorderGroup.disabled = true;
  }
  doReorder(evt){
    evt.detail.complete(true);
  }
}
