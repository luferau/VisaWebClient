import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { VisaResource } from '../visa-resources/shared/visa-resource.model';

@Injectable({
  providedIn: 'root'
})
export class VisaResourceSelectedService {

  private visaResourceSource = new BehaviorSubject<VisaResource>(null);
  visaResourceSelected = this.visaResourceSource.asObservable();

  constructor() { }

  changeVisaResourceSelection(visaResource: VisaResource) {
    this.visaResourceSource.next(visaResource);
  }
}
