import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../../modules/dashboard/dashboard.component';
import { DefaultComponent } from './default.component';
import { RouterModule } from '@angular/router';
import { PostComponent } from '../../modules/post/post.component';
import { SharedModule } from '../../shared/shared.module';
import { MaterialDesign } from '../../material/material';



@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MaterialDesign,

  ]
})
export class DefaultModule { }
