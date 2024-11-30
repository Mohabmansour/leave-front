import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-user-panel',
  standalone: true,
  imports: [ReactiveFormsModule ,HttpClientModule],
  providers:[ApiService ,CommonModule] ,
  templateUrl: './user-panel.component.html',
  styleUrl: './user-panel.component.scss'
})
export class UserPanelComponent {
  _ApiService = inject(ApiService);
  error:any

  adminLoginForm:FormGroup = new FormGroup({
    leave_id : new FormControl(null) ,
    national_id : new FormControl(null)
  });
  onsubmit(){
    console.log(this.adminLoginForm.value);

    this._ApiService.getUserDetails(this.adminLoginForm.value).subscribe(
      (res)=>{console.log(res);
      } ,
      (err) =>{ console.log(err.error.message);
      }
    )


  }
}
