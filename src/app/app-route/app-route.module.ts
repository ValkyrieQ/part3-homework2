import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { SkillComponent } from '../skill/skill.component';
import { ContactComponent } from '../contact/contact.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

import { ContentPanelComponent } from '../layout/content-panel/content-panel.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'Home',
  },
  {
    path: 'Home',
    component: HomeComponent,
  },
  {
    path: 'About',
    component: AboutComponent,
  },
  {
    path: 'Skill',
    component: SkillComponent,
  },
  {
    path: 'Contact',
    component: ContactComponent,
  },
  {
    path: 'Portfolio',
    component: PortfolioComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouteModule {}
