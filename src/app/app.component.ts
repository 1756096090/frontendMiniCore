import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReportExpensesComponent } from '../components/report-expenses/report-expenses.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReportExpensesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontendMiniCore';
}
