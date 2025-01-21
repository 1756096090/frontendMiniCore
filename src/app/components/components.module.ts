import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportExpensesComponent } from './report-expenses/report-expenses.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ReportExpensesComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ReportExpensesComponent
  ]
})
export class ComponentsModule { }