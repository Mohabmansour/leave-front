import { Injectable } from '@angular/core';
// import HijriDate from 'hijri-date';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  

  constructor() { }
  // convertHijriToGregorian(hijriDate: string): string {
  //   // Convert Hijri date to Gregorian date
  //   const hijri = new HijriDate(hijriDate);
  //   const gregorianDate = hijri.toGregorian();
  //   // Return the Gregorian date in YYYY-MM-DD format
  //   return `${gregorianDate.year}-${String(gregorianDate.month).padStart(2, '0')}-${String(gregorianDate.day).padStart(2, '0')}`;
  // }
}
