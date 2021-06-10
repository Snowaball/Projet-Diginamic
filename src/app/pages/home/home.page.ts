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
  /* La fonction qui appelle le service qui fait vibrer l'appareil*/
  vibration(){
    this.vibrationService.vibrate();
  }
  /* La fonction qui active ou désactive la fonctionnalité de reorganiser les articles*/
  toggleReorder(){
    if(this.toggle){
      this.toggle=false;
    }else{
      this.toggle =true;
    }
  }

  /* Je récupère mes info de news service*/
  ngOnInit() {
    this.news = this.newsService.getAll();
  }

  /* Je désactive de base la réorganisation des articles */
  ngAfterViewInit(): void {
    this.reorderGroup.disabled = true;
  }

  /* Je termine l'action glisser déposer lors de la reorganisation d'un article */
  doReorder(evt){
    evt.detail.complete(true);
  }
}
