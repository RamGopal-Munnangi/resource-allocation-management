import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardsDataService {
  private dataUrl = 'assets/data.json'; // Path to your JSON file

  constructor(private http: HttpClient) { }

  getChartData(): Observable<any> {
    return this.http.get<any>(this.dataUrl);
  }
}
