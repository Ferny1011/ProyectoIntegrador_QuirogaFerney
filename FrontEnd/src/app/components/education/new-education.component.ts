import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Education } from 'src/app/model/education';
import { EducationService } from 'src/app/service/education.service';
import { Storage, ref, uploadBytes, listAll, getDownloadURL } from '@angular/fire/storage';
@Component({
  selector: 'app-new-education',
  templateUrl: './new-education.component.html',
  styleUrls: ['./new-education.component.scss']
})
export class NewEducationComponent implements OnInit {
  tituloE: string;
  fechaE: string;
  descripcionE: string;
  imgE: string;
  urlE: string;
  urlsImg: string[];
  constructor(private educationS: EducationService, private router: Router, private activatedRoute: ActivatedRoute, private storage: Storage) { 
    this.urlsImg = [];
  }

  ngOnInit(): void {
  
  }

  onCreate(): void {
    const education = new Education(this.tituloE, this.fechaE, this.descripcionE, this.imgE, this.urlE);
    this.educationS.save(education).subscribe(
      data => {
        alert("Titulo agregado con exito");
        this.router.navigate(['']);
      }, err => {
        alert("No se pudo agregar el titulo");
        this.router.navigate(['']);
      }
    )
  }

  uploadImage($event: any) {
    const file = $event.target.files[0];
    const imgRef = ref(this.storage, `images/${file.name}`);

    uploadBytes(imgRef, file)
      .then(response => {
        console.log(response)
      })
      .catch(error => console.log(error));
  }

  getImages() {
    const imagesRef = ref(this.storage, 'images');
    listAll(imagesRef)
      .then(async response => {
        console.log(response);
        this.urlsImg = [];
        for(let item of response.items) {
         const url = await getDownloadURL(item);
         this.urlsImg.push(url);
        }
      })
      .catch(error => console.log(error));
  }
}
