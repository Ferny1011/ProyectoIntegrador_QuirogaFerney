import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Projects } from 'src/app/model/projects';

import { ProjectsService } from 'src/app/service/projects.service';

@Component({
  selector: 'app-new-projects',
  templateUrl: './new-projects.component.html',
  styleUrls: ['./new-projects.component.scss']
})
export class NewProjectsComponent implements OnInit {
  nombre: string;
  categoria: string;
  fecha: string;
  img: string;
  url: string;

  constructor(private projectService: ProjectsService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const projecto = new Projects(this.nombre, this.categoria, this.fecha, this.img, this.url);
    this.projectService.save(projecto).subscribe(
      data => {
        alert('Se ha creado el projecto correctamente');
        this.router.navigate(['']);
      }, err => {
        alert('Ha ocurrido un error al añadir el projecto');
        this.router.navigate(['']);
      }
    )
  }

}
