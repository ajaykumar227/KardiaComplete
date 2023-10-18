import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnrollDataService {

  enrollData!: any;

  constructor() { }

  getEnrollData(data: any) {
    this.enrollData = data;
  }

}
