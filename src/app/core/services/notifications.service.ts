import { Injectable } from '@angular/core';
import notificationData from '../../../assets/notifications.json'

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  private notificationsList : any = notificationData;
  constructor() { }

  getNotificationsData(){
    return this.notificationsList
  }
}
