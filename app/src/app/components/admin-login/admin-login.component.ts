import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.scss'
})
export class AdminLoginComponent {
  adminLoginForm:FormGroup = new FormGroup({
    email : new FormControl(null) ,
    password : new FormControl(null)
  });
  onsubmit(){
    console.log(this.adminLoginForm.value);
  }

}
