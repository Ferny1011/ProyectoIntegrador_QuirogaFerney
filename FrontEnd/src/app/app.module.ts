import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoAPComponent } from './components/logo-ap/logo-ap.component';
import { SocialComponent } from './components/social/social.component';
import { BannerComponent } from './components/banner/banner.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { LoginComponent } from './components/login/login.component';
import { BackgroundAnimationComponent } from './components/background-animation/background-animation.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { InterceptorProvider } from './service/interceptor-service';
import { NewExperienceComponent } from './components/experience/new-experience.component';
import { EditExperienceComponent } from './components/experience/edit-experience.component';
import { NewEducationComponent } from './components/education/new-education.component';
import { EditEducationComponent } from './components/education/edit-education.component';
import { EditSkillsComponent } from './components/skills/edit-skills.component';
import { NewSkillsComponent } from './components/skills/new-skills.component';
import { HardSkillsComponent } from './components/hard-skills/hard-skills.component';

import { NewHardComponent } from './components/hard-skills/new-hard.component';
import { EditBannerComponent } from './components/banner/edit-banner.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { EditAboutComponent } from './components/about/edit-about.component';
import { NewAboutComponent } from './components/about/new-about.component';
import { NewProjectsComponent } from './components/projects/new-projects.component';
import { EditProjectsComponent } from './components/projects/edit-projects.component';
import { EditHardComponent } from './components/hard-skills/edit-hard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoAPComponent,
    SocialComponent,
    BannerComponent,
    MainContentComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    EducationComponent,
    ProjectsComponent,
    LoginComponent,
    BackgroundAnimationComponent,
    FooterComponent,
    NewExperienceComponent,
    EditExperienceComponent,
    NewEducationComponent,
    EditEducationComponent,
    EditSkillsComponent,
    NewSkillsComponent,
    HardSkillsComponent,
    NewHardComponent,
    EditBannerComponent,
    EditAboutComponent,
    NewAboutComponent,
    NewProjectsComponent,
    EditProjectsComponent,
    EditHardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
  ],
  providers: [
    InterceptorProvider
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
