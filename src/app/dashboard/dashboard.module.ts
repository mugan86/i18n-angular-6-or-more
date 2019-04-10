import { TranslateModule } from '@ngx-translate/core';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
