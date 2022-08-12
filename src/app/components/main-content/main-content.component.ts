import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  activeSection: string ='home';
  activeButton:string = 'home';
  
  constructor() { }

  ngOnInit(): void {}

  checkActiveSection(button: string){
    return this.activeSection == button ? true : false;
  }

  changeActiveSection(newSection: string){
    this.activeSection = newSection;
  }


}
