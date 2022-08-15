import { Component, OnInit } from '@angular/core';

declare var CircleProgress:any;
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  CircleSkills(){

    CircleProgress();
  }

}
