import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';



@NgModule({
  declarations: [
    ProfileComponent,
    SkillsComponent,
    EducationComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
