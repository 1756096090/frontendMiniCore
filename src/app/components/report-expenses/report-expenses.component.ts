import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ExpenseService } from '../../services/expense.service';
import { DepartmentExpense } from '../../models/expense.report';

@Component({
  selector: 'app-report-expenses',
  templateUrl: './report-expenses.component.html',
  styleUrls: ['./report-expenses.component.scss']
})
export class ReportExpensesComponent implements OnInit {
  range: FormGroup;
  reportExpense: DepartmentExpense[] = [];  // This will hold the report data
  displayedColumns: string[] = ['departmentName', 'totalAmount'];  // Define the columns for the table

  constructor(
    private fb: FormBuilder,
    private expenseService: ExpenseService
  ) {
    this.range = this.fb.group({
      start: [null],
      end: [null],
    });
  }

  ngOnInit(): void {}

  getReport(): void {
    this.expenseService.getReportExpense(this.range.value.start, this.range.value.end)
      .subscribe((expenses) => {
        this.reportExpense = Object.values(expenses); 
      });
  }
}
