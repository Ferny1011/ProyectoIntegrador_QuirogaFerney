import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { About } from 'src/app/model/about';
import { AboutService } from 'src/app/service/about.service';


@Component({
  selector: 'app-edit-about',
  templateUrl: './edit-about.component.html',
  styleUrls: ['./edit-about.component.scss']
})
export class EditAboutComponent implements OnInit {
  abouts:About= null;
  constructor(private activedRouter:ActivatedRoute, private aboutService: AboutService, private router: Router) { }

  ngOnInit(): void {
    const id = this.activedRouter.snapshot.params['id'];
    this.aboutService.details(id).subscribe(
      data => {
        this.abouts = data;
      }, err => {
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate():void{
    const id = this.activedRouter.snapshot.params['id'];
    this.aboutService.update(id, this.abouts).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al actualizar");
        this.router.navigate(['']);
      }
    )
  }


}
