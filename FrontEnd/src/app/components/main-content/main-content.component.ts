import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { elementAt, ObjectUnsubscribedError } from 'rxjs';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})

export class MainContentComponent implements OnInit {

  activeButton:string = 'home';

  constructor() { }

  ngOnInit(): void {}

  checkActiveClass(button: string){
    return this.activeButton == button ? true : false;
  }

  changeActiveButton(newButton: string){

    this.activeButton = newButton;
  }

  
  toHome(){
    document.getElementById('home')?.scrollIntoView({behavior:"smooth"});
  }
  toAbout(){
    document.getElementById('about')?.scrollIntoView({behavior:"smooth"});
  }

  toKnowledge(){
    document.getElementById('knowledge')?.scrollIntoView({behavior:"smooth"});
  }

  toProjects(){
    document.getElementById('projects')?.scrollIntoView({behavior:"smooth"});
  }

}
