import { Component, OnInit } from '@angular/core';
import { About } from 'src/app/model/about';
import { AboutService } from 'src/app/service/about.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  abouts: About[]=[];
  constructor(private aboutS:AboutService, private tokenService:TokenService) { }
  isLogged= false;
  ngOnInit(): void {
    this.cargarAbout();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarAbout(){
    this.aboutS.lista().subscribe(
      data => {
        this.abouts = data
      }
    )
  }

  delete(id: number) {
    if (id != undefined) {
      this.aboutS.delete(id).subscribe(
        data => {
          this.cargarAbout();
        }, err => {
          alert("No se pudo eliminar");
        }
      )
    }
  }

}
