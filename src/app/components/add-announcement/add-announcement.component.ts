import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AnnouncementService} from "../../service/announcement.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-announcement',
  templateUrl: './add-announcement.component.html',
  styleUrls: ['./add-announcement.component.css']
})
export class AddAnnouncementComponent implements OnInit {

  public announcementForm = new FormGroup({
    gameName: new FormControl('', Validators.required),
    additionalInfo: new FormControl(''),
    nick: new FormControl('', Validators.required),
    discordName: new FormControl('', Validators.required),
    ranked: new FormControl('')
  });

  constructor(private announcementsService: AnnouncementService,
              private router: Router) { }

  ngOnInit(): void {
  }

  public onSelect(): void {
    const gameName = this.announcementForm.value.gameName;
    const additionalInfo = this.announcementForm.value.additionalInfo;
    const nick = this.announcementForm.value.nick;
    const discordName = this.announcementForm.value.discordName;
    let isRanked = false;
    if (this.announcementForm.value.ranked == 'ranked') {
      isRanked = true;
    }
    this.announcementForm.reset();
    this.announcementsService.postAnnouncement(gameName, additionalInfo, nick, discordName, isRanked);
    this.router.navigate(['/'])
  }

}
