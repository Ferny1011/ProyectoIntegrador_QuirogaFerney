import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { About } from 'src/app/model/about';
import { AboutService } from 'src/app/service/about.service';


@Component({
  selector: 'app-new-about',
  templateUrl: './new-about.component.html',
  styleUrls: ['./new-about.component.scss']
})
export class NewAboutComponent implements OnInit {
  titulo: string;
  subtitulo: string;
  img: string;
  constructor(private aboutService: AboutService,private router:Router, private activedRouter:ActivatedRoute) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const about = new About(this.titulo, this.subtitulo, this.img);
    this.aboutService.save(about).subscribe(
      data => {
        alert("Elemento agregado con exito");
        this.router.navigate(['']);
      }, err => {
        alert("No se pudo agregar el elemento");
        this.router.navigate(['']);
      }
    )
  }


}
