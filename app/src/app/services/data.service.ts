import { Injectable } from '@angular/core';
import { toHijri } from 'luxon-hijri';
// Make sure to import the hijri plugin
@Injectable({
  providedIn: 'root',
})
export class DataService {
  fullHijiriDate: any;

  constructor() {}
  convertToHijri(gregorianDate: Date): any {
    const hijriDate = toHijri(gregorianDate);
    this.fullHijiriDate = `${hijriDate?.hd}-${hijriDate?.hm}-${hijriDate?.hy}`;
    return this.fullHijiriDate;
  }
}
