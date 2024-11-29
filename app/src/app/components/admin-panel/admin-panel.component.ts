import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-admin-panel',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.scss',
})
export class AdminPanelComponent {
  constructor(){
    
  }
  _DataService = inject(DataService)
  AdminPanelForm: FormGroup = new FormGroup({
    leave_id: new FormControl(),
    leave_duration: new FormControl(),
    admission_date_en: new FormControl(),
    admission_date_ar: new FormControl('admission_date_ar'),
    discharge_date_en: new FormControl(),
    discharge_date_ar: new FormControl('discharge_date_ar'),
    issue_date: new FormControl(new Date().toISOString()),
    name_en: new FormControl(),
    name_ar: new FormControl(),
    national_id: new FormControl(),
    nationality_id: new FormControl(),
    employer_en: new FormControl(),
    employer_ar: new FormControl(),

    physician_name_en: new FormControl(),
    physician_name_ar: new FormControl(),
    position_en: new FormControl(),
    position_ar: new FormControl(),
  });

  onSubmitAdmin(){
    this.AdminPanelForm.controls['admission_date_ar'].setValue(this._DataService.convertToHijri(this.AdminPanelForm.get('admission_date_en')?.value));
    this.AdminPanelForm.controls['discharge_date_ar'].setValue(this._DataService.convertToHijri(this.AdminPanelForm.get('discharge_date_en')?.value));
console.log(this.AdminPanelForm.get('admission_date_ar')?.value);
    
  }
}
