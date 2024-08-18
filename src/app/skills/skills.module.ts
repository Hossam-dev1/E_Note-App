import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SkillsComponent } from './skills.component';
import { SignalsComponent } from './components/signals/signals.component';
import { SolidPrincipelsComponent } from './components/solid-principels/solid-principels.component';

const routes: Routes = [
  {
    path: '',
    component: SkillsComponent,
  },
  {
    path: 'signals',
    component: SignalsComponent
  },
  {
    path: 'solid_principles',
    component: SolidPrincipelsComponent
  },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SkillsModule { }
