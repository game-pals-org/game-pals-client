import { Component, OnInit } from '@angular/core';
import {Announcement} from "../../model/announcement.model";
import {AnnouncementService} from "../../service/announcement.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public announcementSearch = new FormGroup({
    gameName: new FormControl('')
  });


  public announcements: Announcement[] = [];

  constructor(private announcementsService: AnnouncementService) {
    announcementsService.getAnnouncementsByDateDsc().subscribe(
      (announcements: Announcement[]) => {
        this.announcements = announcements;
      }
    )

  }

  public getAnnouncementsByGameNameAsc(): void  {
    this.announcementsService.getAnnouncementsByGameNameAsc().subscribe(
      (announcements: Announcement[]) => {
        this.announcements = announcements;
      }
    )
  }

  public getAnnouncementsByGameNameDsc(): void  {
    this.announcementsService.getAnnouncementsByGameNameDsc().subscribe(
      (announcements: Announcement[]) => {
        this.announcements = announcements;
      }
    )
  }

  public getAnnouncementsByDateDsc(): void  {
    this.announcementsService.getAnnouncementsByDateDsc().subscribe(
      (announcements: Announcement[]) => {
        this.announcements = announcements;
      }
    )
  }

  public getAnnouncementsByDateAsc(): void  {
    this.announcementsService.getAnnouncementsByDateAsc().subscribe(
      (announcements: Announcement[]) => {
        this.announcements = announcements;
      }
    )
  }

  public getRankedAnnouncements(): void  {
    this.announcementsService.getRankedAnnouncements().subscribe(
      (announcements: Announcement[]) => {
        this.announcements = announcements;
      }
    )
  }

  public getCasualAnnouncements(): void  {
    this.announcementsService.getCasualAnnouncements().subscribe(
      (announcements: Announcement[]) => {
        this.announcements = announcements;
      }
    )
  }

  public getAnnouncementsBySearchedGame(): void  {
    let name = this.announcementSearch.value.gameName;
    if (!name.isEmpty) {
      this.announcementSearch.reset()
      this.announcementsService.getAnnouncementsBySearchedGame(name).subscribe(
        (announcements: Announcement[]) => {
          this.announcements = announcements;
        }
      )
    }
  }


  ngOnInit(): void {
  }

}
