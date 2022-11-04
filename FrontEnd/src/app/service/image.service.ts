import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, getDownloadURL, list } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  url: string = "";
  constructor(private storage: Storage) { }
  public uploadImage($event: any, nameF: string, nameS: string) {
    const file = $event.target.files[0];
    const imgRef = ref(this.storage, nameS + `/images/` + nameF);
    uploadBytes(imgRef, file)
      .then(response => { this.getImages(nameS) })
      .catch(error => { console.log(error) })
  }

  getImages(nameS: string) {
    const imagesRef = ref(this.storage, nameS + '/images');
    list(imagesRef)
      .then(async response => {
        for (let item of response.items) {
          this.url = await getDownloadURL(item);
          console.log("La URL es: " + this.url);
        }
      })
      .catch(error => console.log(error))
  }
}



