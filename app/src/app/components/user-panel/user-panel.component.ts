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
  showDetails:boolean = false
  userData:any[] = [] ;
  userName:string=''
  createdAt:string=''
  addmitionS:string=''
  addmitionE:string=''
  period:number = 0
  DocName:string =''
  posistion:string='' 
  leave_days:number = 0




  adminLoginForm:FormGroup = new FormGroup({
    leave_id : new FormControl(null) ,
    national_id : new FormControl(null)
  });
  onsubmit(){
    console.log(this.adminLoginForm.value);

    this._ApiService.getUserDetails(this.adminLoginForm.value).subscribe(
      (res)=>{console.log(res);
        this.showDetails= true
        this.userData = res.data ; 
        this.userName = res.data.name_en ;
        this.createdAt = res.data.createdAt ;
        this.addmitionS = res.data.admission_date_en ;
        this.addmitionE = res.data.discharge_date_en ;
        this.period = res.data.period ;
        this.DocName = res.data.physician_name_en ;
        this.posistion = res.data.position_en ;
        this.leave_days = res.data.leave_days

        // console.log(this.userData[0].name_en);
        


      } ,
      (err) =>{ console.log(err.error.message);
      }
    )


  }
  reSubmit(){
    this.adminLoginForm.reset();
    this.showDetails= false


}
}
