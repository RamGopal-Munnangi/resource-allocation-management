import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResAvailabilityService {
  private dataUrl = 'assets/resourceAvailability.json'; // URL to JSON file
  private resources: any[] = []; // Store resources locally

  constructor(private http: HttpClient) {}

  getResourceAvailability(): Observable<any[]> {
    if (this.resources.length === 0) {
      return this.http.get<any>(this.dataUrl).pipe(
        map(data => {
          this.resources = data.resources; // Ensure 'resources' is correctly accessed
          return this.resources;
        }),
        catchError(this.handleError<any[]>('getResourceAvailability', []))
      );
    } else {
      return of(this.resources);
    }
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
