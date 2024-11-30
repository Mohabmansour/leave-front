import { HttpClientModule } from '@angular/common/http';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-admin-panel',
  standalone: true,
  imports: [HttpClientModule , ReactiveFormsModule],
  providers:[ApiService] ,
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.scss',
})
export class AdminPanelComponent implements OnInit {
  countries:any
  errorMsgBol:boolean = false ;
  errorMsg:string = '' ;
  _ApiService = inject(ApiService)
  constructor(){

  }
  ngOnInit(): void {
    this.getAllCountries()
   }

  AdminPanelForm: FormGroup = new FormGroup({
    leave_id: new FormControl(),
    admission_date_en: new FormControl(),
    discharge_date_en: new FormControl(),
    issue_date: new FormControl(new Date().toISOString()),
    name_en: new FormControl(),
    name_ar: new FormControl(),
    national_id: new FormControl(),
    countryId: new FormControl(),
    employer_en: new FormControl(),
    employer_ar: new FormControl(),
    physician_name_en: new FormControl(),
    physician_name_ar: new FormControl(),
    position_en: new FormControl(),
    position_ar: new FormControl(),
  });

  onSubmitAdmin(){
    console.log(this.AdminPanelForm.value);

    this._ApiService.addNewUser(this.AdminPanelForm.value).subscribe(

      (res)=>{
        this.errorMsgBol = false ;
        this.AdminPanelForm.reset();
      window.open(res.data)
        console.log(res);
      },
      (error)=>{
        this.errorMsgBol = true ;
        this.errorMsg = error.error.message;
      },



    );
  }

  getAllCountries(){
    this._ApiService.getCountries().subscribe((res)=>{
      this.countries = res.data;
    })
}
}