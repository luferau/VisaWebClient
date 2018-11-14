import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

import { VisaResource } from '../visa-resources/shared/visa-resource.model';
import { RequestResult } from '../visa-resources/shared/request-result.model';

@Injectable({
  providedIn: 'root'
})
export class VisaResourceService {

  private API_URL = 'http://localhost:13326/api/VisaResources';  // URL to web api

  constructor(private http: HttpClient) { }

  getAllVisaResources(): Observable<VisaResource[]> {
    return this.http.get<VisaResource[]>(`${this.API_URL}/getAll`).pipe(tap(data => console.log(data)));
  }

  open(visaResourceName: string): Observable<RequestResult> {
    const open_url = `${this.API_URL}/open`;
    const post_data: any = { ResourceName: visaResourceName };
    return this.http.post<RequestResult>(open_url, post_data);
  }

  close(visaResourceName: string): Observable<RequestResult> {
    const close_url = `${this.API_URL}/close`;
    const post_data: any = { ResourceName: visaResourceName };
    return this.http.post<RequestResult>(close_url, post_data);
  }

  write(visaResourceName: string, message: string): Observable<RequestResult> {
    const write_url = `${this.API_URL}/write`;
    const post_data: any = {
       ResourceName: visaResourceName,
       Message: message
      };
    return this.http.post<RequestResult>(write_url, post_data);
  }
}
