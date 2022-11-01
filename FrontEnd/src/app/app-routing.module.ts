import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './components/main-content/main-content.component';
import { LoginComponent } from './components/login/login.component';
import { NewExperienceComponent } from './components/experience/new-experience.component';
import { EditExperienceComponent } from './components/experience/edit-experience.component';
import { NewEducationComponent } from './components/education/new-education.component';
import { EditEducationComponent } from './components/education/edit-education.component';
import { NewSkillsComponent } from './components/skills/new-skills.component';
import { EditSkillsComponent } from './components/skills/edit-skills.component';
import { NewHardComponent } from './components/hard-skills/new-hard.component';
import { EditBannerComponent } from './components/banner/edit-banner.component';
import { NewAboutComponent } from './components/about/new-about.component';
import { EditAboutComponent } from './components/about/edit-about.component';
import { NewProjectsComponent } from './components/projects/new-projects.component';
import { EditProjectsComponent } from './components/projects/edit-projects.component';
const routes: Routes = [
  {
    path: '',
    component: MainContentComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'nuevaexp',
    component: NewExperienceComponent
  },
  {
    path:'editexp/:id',component: EditExperienceComponent
  },
  {
    path: 'nuevaedu',component: NewEducationComponent
  },
  {
    path: 'editedu/:id',component: EditEducationComponent
  },
  {
    path: 'newskill', component: NewSkillsComponent
  },
  {
    path: 'editskills/:id',component: EditSkillsComponent
  },
  {
    path: 'newhard', component: NewHardComponent
  },
  {
    path: 'edithard/:id',component: EditSkillsComponent
  },
  {
    path: 'editbanner/:id',component: EditBannerComponent
  },
  {
    path:'newabout',component: NewAboutComponent
  },
  {
    path:'editabout/:id',component: EditAboutComponent
  },
  {
    path: 'newproject',component: NewProjectsComponent
  },
  {
    path: 'editproject/:id',component: EditProjectsComponent
  },
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
