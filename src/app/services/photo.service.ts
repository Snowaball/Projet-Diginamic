import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Storage } from '@capacitor/storage';
@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  public photos: Photos[] = [];
  constructor() { }
  public async addNewToGallery() {
    // prendre une photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
    this.photos.unshift({
      webviewPath: capturedPhoto.webPath
    });
  }
}
//Déclaration du contenu de photos
export interface Photos {
  webviewPath: string;
}
