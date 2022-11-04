import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Projects } from 'src/app/model/projects';
import { ImageService } from 'src/app/service/image.service';
import { ProjectsService } from 'src/app/service/projects.service';

@Component({
  selector: 'app-edit-projects',
  templateUrl: './edit-projects.component.html',
  styleUrls: ['./edit-projects.component.scss']
})
export class EditProjectsComponent implements OnInit {
  projecto: Projects = null;
  constructor(private projectService: ProjectsService, private activatedRoute: ActivatedRoute, private router: Router, private imageService: ImageService) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.projectService.detail(id).subscribe(
      data => {
        this.projecto = data;
      }, err => {
        alert("Error al modificar el projecto");
      }
    )
    this.imageService.url = "";
  }

  onUpdate() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.projecto.img = this.imageService.url;
    this.projectService.update(id, this.projecto).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar el projecto");
        this.router.navigate(['']);
      }
    )

  }

  uploadImage($event: any) {
    const id = this.activatedRoute.snapshot.params['id'];
    const nameF = "project_" + id;
    const nameS = this.projecto.nombre;
    this.imageService.uploadImage($event, nameF, nameS);
  }


}
