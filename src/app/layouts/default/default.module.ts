import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../../modules/dashboard/dashboard.component';
import { DefaultComponent } from './default.component';
import { RouterModule } from '@angular/router';
import { PostComponent } from '../../modules/post/post.component';
import { SharedModule } from '../../shared/shared.module';
import { MaterialDesign } from '../../material/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardService } from 'src/app/modules/dashboard.service';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
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
    FlexLayoutModule,
    MatPaginatorModule,
    MatTableModule
  ],
  providers: [
    DashboardService
  ]
})
export class DefaultModule { }
