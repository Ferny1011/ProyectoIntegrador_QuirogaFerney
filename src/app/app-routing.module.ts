import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HeaderComponent } from './components/header/header.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SkillsComponent } from './components/skills/skills.component';
const routes: Routes = [
  {
    path: '',
    component: MainContentComponent
  },
  {
    path: 'header',
    component: HeaderComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
     path: 'skills',
     component: SkillsComponent
  },
  // {
  //   path: 'contact',
  //   component: contact
  // }
  {
    path:'**', pathMatch:'full',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
