import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { VisaResource } from '../visa-resources/shared/visa-resource.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class VisaResourceService {

  private API_URL = 'http://localhost:13326/api/VisaResources';  // URL to web api

  constructor(private http: HttpClient) { }

  getVisaResources(): Observable<VisaResource[]> {
    return this.http.get<VisaResource[]>(this.API_URL).pipe(tap(data => console.log(data)));
  }

  openVisaResource(visaResourceName: string): Observable<any> {

  }
}
