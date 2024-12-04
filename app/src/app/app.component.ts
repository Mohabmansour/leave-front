import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminLoginComponent } from "./components/admin-login/admin-login.component";
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AdminLoginComponent ,AdminPanelComponent ,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'app';
  constructor(){

  }

}
