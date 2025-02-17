import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {
  private resourcesUrl = 'assets/resources.json'; // URL to JSON file
  private resources: any[] = []; // Store resources locally

  constructor(private http: HttpClient) {}

  getResourcesList(): Observable<any[]> {
    if (this.resources.length === 0) {
      return this.http.get<any[]>(this.resourcesUrl).pipe(
        map(data => {
          this.resources = data;
          return data;
        }),
        catchError(this.handleError<any[]>('getResourcesList', []))
      );
    } else {
      return of(this.resources);
    }
  }

  updateResourceStatus(id: string, newStatus: string): Observable<any> {
    const resource = this.resources.find(res => res.id === id);
    if (resource) {
      resource.status = newStatus;
    }
    return of(resource); // Simulate successful update
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
