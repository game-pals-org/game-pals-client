import { Component, OnInit } from '@angular/core';
import {LoginStateService} from "../../service/login-state.service";
import {Announcement} from "../../model/announcement.model";
import {AnnouncementService} from "../../service/announcement.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  public announcements: Announcement[] = [];

  constructor(public loginStateService: LoginStateService, private announcementsService: AnnouncementService) {
    announcementsService.getAnnouncementsFromUserWithUsername(loginStateService.username).subscribe(
      (announcements: Announcement[]) => {
        this.announcements = announcements;
      }
    )
  }




  ngOnInit(): void {
  }

}
