import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Education } from 'src/app/model/education';
import { EducationService } from 'src/app/service/education.service';


@Component({
  selector: 'app-edit-education',
  templateUrl: './edit-education.component.html',
  styleUrls: ['./edit-education.component.scss']
})
export class EditEducationComponent implements OnInit {
  education: Education = null;
  constructor(private educationS:EducationService, private activatedRouter: ActivatedRoute, private router:Router) { }

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
  }
  onUpdate():void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.educationS.update(id, this.education).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al actualizar");
        this.router.navigate(['']);
      }
    )
  }



}
