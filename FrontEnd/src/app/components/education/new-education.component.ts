import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Education } from 'src/app/model/education';
import { EducationService } from 'src/app/service/education.service';
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
  constructor(private educationS: EducationService, private router: Router, private activatedRoute: ActivatedRoute) { }

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

}
