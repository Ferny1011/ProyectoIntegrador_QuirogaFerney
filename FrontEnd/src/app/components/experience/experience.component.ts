import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/model/experience';
import { ExperienceService } from 'src/app/service/experience.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  direction: string = 'direction-l';
  expe: Experience[] = [];
  constructor(private experiencie: ExperienceService, private tokenService: TokenService) { }
  isLogged = false;
  ngOnInit(): void {
    this.cargarExperiencia();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarExperiencia(): void {
    this.experiencie.lista().subscribe(data => { this.expe = data });
  }


  changeDirection(): string {
    if (this.direction === 'direction-r') {
      this.direction = 'direction-l';
    } else {
      this.direction = 'direction-r';
    }
    return this.direction;
  }

  delete(id?: number) {
    if (id != undefined) {
      this.experiencie.delete(id).subscribe(
        data => {
          this.cargarExperiencia();
        }, err => {
          alert('No se pudo borrar la experiencia');
        }
      )
    }
  }
}
