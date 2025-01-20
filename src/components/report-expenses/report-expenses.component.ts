import { Component } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { FormGroup, FormControl, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
import moment from 'moment';


@Component({
  selector: 'app-report-expenses',
  standalone: true,
  imports: [
    CommonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    ReactiveFormsModule
  ],
  templateUrl: './report-expenses.component.html',
  styleUrls: ['./report-expenses.component.scss']
})
export class ReportExpensesComponent {
  range: FormGroup;

  constructor(private fb: FormBuilder) {
    this.range = this.fb.group({
      start: [null],
      end: [null],
    });
  }

  onPredefinedRangeSelect(rangeType: string): void {
    const today = moment();
    let startDate: moment.Moment;
    let endDate: moment.Moment;

    switch (rangeType) {
      case 'lastWeek':
        startDate = today.clone().subtract(1, 'week').startOf('week');
        endDate = today.clone().subtract(1, 'week').endOf('week');
        break;
      case 'lastMonth':
        startDate = today.clone().subtract(1, 'month').startOf('month');
        endDate = today.clone().subtract(1, 'month').endOf('month');
        break;
      case 'lastYear':
        startDate = today.clone().subtract(1, 'year').startOf('year');
        endDate = today.clone().subtract(1, 'year').endOf('year');
        break;
      default:
        return;
    }

    this.range.patchValue({
      start: startDate.toDate(),
      end: endDate.toDate(),
    });
  }
}

