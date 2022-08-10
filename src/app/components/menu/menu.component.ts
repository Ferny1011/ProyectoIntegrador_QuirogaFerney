import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  sectBtn = document.querySelectorAll('.control');
  
  constructor() { }

  ngOnInit(): void {}

  //Button click active class
  SetActiveClass(){
    for(let i=0; i<this.sectBtn.length;i++){
      this.sectBtn[i].addEventListener('click', function(){
          let currentBtn = document.querySelectorAll('.active-btn');
          currentBtn[0].className=currentBtn[0].className.replace('active-btn','');
      })
    }

  }
}
