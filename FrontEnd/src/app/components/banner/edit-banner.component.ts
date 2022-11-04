import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { ImageService } from 'src/app/service/image.service';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-edit-banner',
  templateUrl: './edit-banner.component.html',
  styleUrls: ['./edit-banner.component.scss']
})
export class EditBannerComponent implements OnInit {
  persona: persona = null;
  constructor(private activedRouter: ActivatedRoute, private personaService: PersonaService, private router: Router, public imageService: ImageService) { }

  ngOnInit(): void {
    const id = this.activedRouter.snapshot.params['id'];
    this.personaService.details(id).subscribe(
      data => {
        this.persona = data;
      }, err => {
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activedRouter.snapshot.params['id'];
    this.persona.img = this.imageService.url;
    this.personaService.update(id, this.persona).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al actualizar");
        this.router.navigate(['']);
      }
    )
  }
  uploadImage($event: any) {
    const id = this.activedRouter.snapshot.params['id'];
    const nameF = "perfil_" + id;
    const nameS = this.persona.nombre;
    this.imageService.uploadImage($event, nameF, nameS);
  }
}
