import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Projects } from 'src/app/model/projects';
import { ProjectsService } from 'src/app/service/projects.service';

@Component({
  selector: 'app-edit-projects',
  templateUrl: './edit-projects.component.html',
  styleUrls: ['./edit-projects.component.scss']
})
export class EditProjectsComponent implements OnInit {
  projecto: Projects=null;
  constructor(private projectService:ProjectsService,private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.projectService.detail(id).subscribe(
      data => {
        this.projecto = data;
      }, err => {
        alert("Error al modificar el projecto");
      }
    )
  }

  onUpdate() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.projectService.update(id, this.projecto).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar el projecto");
        this.router.navigate(['']);
      }
    )

  }


}
