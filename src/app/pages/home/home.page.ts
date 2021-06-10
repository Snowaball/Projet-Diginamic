import { Component } from '@angular/core';
import {PhotoService} from '../../services/photo.service';
import {VibrationService} from '../../services/vibration.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public toggle= true;
  constructor(public photoService: PhotoService,public vibrationService: VibrationService) {}
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

}
