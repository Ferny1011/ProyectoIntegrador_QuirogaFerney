import { Component, OnInit } from '@angular/core';
import { HardSkills } from 'src/app/model/hard-skills';
import { HardskillsService } from 'src/app/service/hardskills.service';
import { TokenService } from 'src/app/service/token.service';
@Component({
  selector: 'app-hard-skills',
  templateUrl: './hard-skills.component.html',
  styleUrls: ['./hard-skills.component.scss']
})
export class HardSkillsComponent implements OnInit {
  hard: HardSkills[] = [];
 
  

  constructor(private hardS: HardskillsService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarSkills();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSkills(): void {
    this.hardS.lista().subscribe(
      data => {
        this.hard = data;
      }
    )
  }

  delete(id:number){
    if(id != undefined){
      this.hardS.delete(id).subscribe(
        data => {
          this.cargarSkills();
        },err => {
          alert("No se pudo eliminar la skill");
        }
      )
    }
  }


}
