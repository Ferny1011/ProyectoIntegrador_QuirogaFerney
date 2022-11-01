import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experience } from 'src/app/model/experience';
import { ExperienceService } from 'src/app/service/experience.service';

@Component({
  selector: 'app-new-experience',
  templateUrl: './new-experience.component.html',
  styleUrls: ['./new-experience.component.scss']
})
export class NewExperienceComponent implements OnInit {
  nombreE: string = '';
  fechaE: string = '';
  descripcionE: string = '';
  constructor(private sExperiencia: ExperienceService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const expe = new Experience(this.nombreE, this.fechaE, this.descripcionE);
    this.sExperiencia.save(expe).subscribe(
      data => {
        alert('Se ha creado la experiencia');
        this.router.navigate(['']);
      }, err => {
        alert('No se ha podido crear la experiencia');
        this.router.navigate(['']);
      })
  }

}
