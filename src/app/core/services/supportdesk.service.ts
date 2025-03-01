import { Injectable } from '@angular/core';
import ticketsData from '../../../assets/supporttickets.json'


@Injectable({
  providedIn: 'root'
})
export class SupportdeskService {
  private ticketsUrl = 'assets/supporttickets.json'; // URL to JSON file
  private ticketsList: any = ticketsData;
  constructor() { }

  getTicketsList(){
    return this.ticketsList
  }
}
