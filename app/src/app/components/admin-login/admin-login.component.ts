import { HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [ReactiveFormsModule ,HttpClientModule],
  providers:[ApiService ,CommonModule] ,
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.scss'
})
export class AdminLoginComponent {
  _Router = inject(Router);
  _ApiService = inject(ApiService);
  error:any

  adminLoginForm:FormGroup = new FormGroup({
    email : new FormControl(null) ,
    password : new FormControl(null)
  });
  onsubmit(){
    this._ApiService.adminLogin(this.adminLoginForm.value).subscribe((res)=>{
      if(res){
            this._Router.navigate(['/admin-panel']);  // Navigate to admin panel page after successful login
      }
    } ,
    (err)=>{

      this.error = err.error.message;  // Show error message if login failed
    }
  )

  }

}
