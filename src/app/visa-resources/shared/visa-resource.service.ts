import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { VisaResource } from './visa-resource.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class VisaResourceService {

  private visaResourcesUrl = 'http://localhost:13326/api/VisaResources';  // URL to web api

  constructor(private http: HttpClient) { }

  getVisaResources(): Observable<VisaResource[]> {
    return this.http.get<VisaResource[]>(this.visaResourcesUrl);
  }
}
