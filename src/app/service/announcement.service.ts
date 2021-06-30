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

  public postAnnouncement(gameName: string, additionalInfo: string, nick: string, discordName: string, isRanked: boolean): void{
    const headers = { 'content-type': 'application/json'};
    const body = JSON.stringify({ id: 0, nick: nick, gameName: gameName, discordName: discordName, additionalInfo: additionalInfo, ranked: isRanked, date: new Date()});
    const result = this.http.post('https://gamepals.herokuapp.com/announcement', body, {'headers':headers});
    result.subscribe(data => {console.log(data)});
  }

  public getAnnouncementsByGameNameAsc(): Observable<Announcement[]> {
    return this.http.get<Announcement[]>('https://gamepals.herokuapp.com/announcement/gamenameasc');
  }

  public getAnnouncementsByGameNameDsc(): Observable<Announcement[]> {
    return this.http.get<Announcement[]>('https://gamepals.herokuapp.com/announcement/gamenamedesc');
  }

  public getAnnouncementsByDateDsc(): Observable<Announcement[]> {
    return this.http.get<Announcement[]>('https://gamepals.herokuapp.com/announcement/datedesc');
  }

  public getAnnouncementsByDateAsc(): Observable<Announcement[]> {
    return this.http.get<Announcement[]>('https://gamepals.herokuapp.com/announcement/dateasc');
  }

  public getRankedAnnouncements(): Observable<Announcement[]> {
    return this.http.get<Announcement[]>('https://gamepals.herokuapp.com/announcement/ranked');
  }

  public getCasualAnnouncements(): Observable<Announcement[]> {
    return this.http.get<Announcement[]>('https://gamepals.herokuapp.com/announcement/casual');
  }
}
