import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Announcement} from "../model/announcement.model";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  constructor(private http: HttpClient) {
  };

  public getAnnouncements(): Observable<Announcement[]> {
    return this.http.get<Announcement[]>('https://gamepals.herokuapp.com/announcement');
  }

  public postAnnouncement(gameName: string, additionalInfo: string, nick: string, discordName: string): void{
    this.http.post<Announcement>('https://gamepals.herokuapp.com/announcement', { id: 0, nick: nick, gameName: gameName, discordName: discordName, additionalInfo: additionalInfo });
  }

}
