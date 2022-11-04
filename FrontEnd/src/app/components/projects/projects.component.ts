import { Component, OnInit } from '@angular/core';
import { Projects } from 'src/app/model/projects';
import { ProjectsService } from 'src/app/service/projects.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projectos: Projects[] = [];
  constructor(private projectService: ProjectsService, private tokenService: TokenService) { }
  isLogged = false;
  ngOnInit(): void {
    this.cargarProjectos();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
  cargarProjectos(): void {
    this.projectService.lista().subscribe(
      data => {
        this.projectos = data;
      }
    )
  }

  delete(id: number) {
    if (id != undefined) {
      this.projectService.delete(id).subscribe(
        data => {
          this.cargarProjectos();
        }, err => {
          alert("No se pudo eliminar el projecto");
        }
      )
    }
  }

}
