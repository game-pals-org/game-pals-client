import { Component, OnInit } from '@angular/core';
import {Announcement} from "../../model/announcement.model";
import {AnnouncementService} from "../../service/announcement.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public announcements: Announcement[] = [];

  constructor(private announcementsService: AnnouncementService) {
    announcementsService.getAnnouncements().subscribe(
      (announcements: Announcement[]) => {
        this.announcements = announcements;
      }
    )

  }

  ngOnInit(): void {
  }

}
