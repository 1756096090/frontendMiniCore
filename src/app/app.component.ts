import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class AppComponent {
  title = 'frontendMiniCore';
}
