import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userId: string = '60e0a5dd8525add92e22415a'
  profileData:any
  constructor( private profileService: ProfileService) {
      this.profileService.getProfileData(this.userId).subscribe(({userDetails}:any) => {
        this.profileData = userDetails
      });
   }

  ngOnInit(): void {
  }

}
