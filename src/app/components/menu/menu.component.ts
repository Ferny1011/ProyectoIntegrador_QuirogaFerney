import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  activeButton:string = 'home';
  
  constructor() { }

  ngOnInit(): void {}

  checkActiveClass(button: string){
    return this.activeButton == button ? true : false;
  }

  changeActiveButton(newButton: string){
    this.activeButton = newButton;
  }

}
