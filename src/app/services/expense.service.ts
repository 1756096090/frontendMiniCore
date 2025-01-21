import { Injectable } from '@angular/core';
import { currentEnvironment } from '../config/config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DepartmentExpense } from '../models/expense.report';



@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private url = `${currentEnvironment}api/Expense/filter_by_dates`;

  constructor(private http: HttpClient) {}

  getReportExpense(firstDate: Date, endDate: Date): Observable<Record<string, DepartmentExpense>> {
    const formattedStartDate = this.formatDate(firstDate);
    const formattedEndDate = this.formatDate(endDate);

    const encodedStartDate = encodeURIComponent(formattedStartDate);
    const encodedEndDate = encodeURIComponent(formattedEndDate);

    return this.http.get<Record<string, DepartmentExpense>>(
      `${this.url}/${encodedStartDate}/${encodedEndDate}`
    );
  }

  private formatDate(date: Date): string {
    return date.toISOString();  // Formato 'YYYY-MM-DDTHH:mm:ss.sssZ'
  }
}
