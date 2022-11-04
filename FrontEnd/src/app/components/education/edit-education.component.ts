import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Education } from 'src/app/model/education';
import { EducationService } from 'src/app/service/education.service';
import { ImageService } from 'src/app/service/image.service';


@Component({
  selector: 'app-edit-education',
  templateUrl: './edit-education.component.html',
  styleUrls: ['./edit-education.component.scss']
})
export class EditEducationComponent implements OnInit {
  education: Education = null;
  constructor(private educationS: EducationService, private activatedRouter: ActivatedRoute, private router: Router, private imageService: ImageService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educationS.details(id).subscribe(
      data => {
        this.education = data;
      }, err => {
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
    this.imageService.url = "";
  }
  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.education.imgE = this.imageService.url;
    this.educationS.update(id, this.education).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al actualizar");
        this.router.navigate(['']);
      }
    )
  }

  uploadImage($event: any) {
    const id = this.activatedRouter.snapshot.params['id'];
    const nameF = "educacion_" + id;
    const nameS = this.education.tituloE;
    this.imageService.uploadImage($event, nameF, nameS);
  }

}
