import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardSkills } from 'src/app/model/hard-skills';
import { HardskillsService } from 'src/app/service/hardskills.service';

@Component({
  selector: 'app-new-hard',
  templateUrl: './new-hard.component.html',
  styleUrls: ['./new-hard.component.scss']
})
export class NewHardComponent implements OnInit {
  nombre: string;
  porcentaje: number;
  urlimg: string;
  constructor(private hardS: HardskillsService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const hard = new HardSkills(this.nombre, this.porcentaje, this.urlimg);
    this.hardS.save(hard).subscribe(
      data => {
        alert('Se ha creado la skill correctamente');
        this.router.navigate(['']);
      }, err => {
        alert('Ha ocurrido un error al añadir la skill');
        this.router.navigate(['']);
      }
    );
  }

}
