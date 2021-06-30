import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AnnouncementService} from "../../service/announcement.service";

@Component({
  selector: 'app-add-announcement',
  templateUrl: './add-announcement.component.html',
  styleUrls: ['./add-announcement.component.css']
})
export class AddAnnouncementComponent implements OnInit {

  public announcementForm = new FormGroup({
    gameName: new FormControl(''),
    additionalInfo: new FormControl(''),
    nick: new FormControl(''),
    discordName: new FormControl(''),
    ranked: new FormControl('')
  });

  constructor(private announcementsService: AnnouncementService) { }

  ngOnInit(): void {
  }

  public onSelect(): void {
    const gameName = this.announcementForm.value.gameName;
    const additionalInfo = this.announcementForm.value.additionalInfo;
    const nick = this.announcementForm.value.nick;
    const discordName = this.announcementForm.value.discordName;
    let isRanked = false;
    if (this.announcementForm.value.isRanked === "ranked") {
      isRanked = true;
    }
    this.announcementForm.reset();
    this.announcementsService.postAnnouncement(gameName, additionalInfo, nick, discordName, isRanked);
  }

}
