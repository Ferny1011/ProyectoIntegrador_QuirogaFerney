import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HardSkills } from 'src/app/model/hard-skills';
import { HardskillsService } from 'src/app/service/hardskills.service';

@Component({
  selector: 'app-edit-hard',
  templateUrl: './edit-hard.component.html',
  styleUrls: ['./edit-hard.component.scss']
})
export class EditHardComponent implements OnInit {
  hard: HardSkills=null;

  constructor(private hardS: HardskillsService,private activatedRouter:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.hardS.detail(id).subscribe(
      data => {
        this.hard = data;
      }, err => {
        alert('No se ha podido cargar la skill');
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.hardS.update(id, this.hard).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert('No se ha podido actualizar la skill');
        this.router.navigate(['']);
      }
    )
  }

}
