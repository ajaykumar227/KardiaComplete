import { Component, OnInit } from '@angular/core';
import { EnrollDataService } from 'src/app/shared/enroll-data.service';

@Component({
  selector: 'app-profile-setup',
  templateUrl: './profile-setup.component.html',
  styleUrls: ['./profile-setup.component.css']
})
export class ProfileSetupComponent implements OnInit {

  data!: any;
  constructor(public enrollDataService: EnrollDataService) { }

  ngOnInit(): void {
    this.data = this.enrollDataService.enrollData;
  }

}
