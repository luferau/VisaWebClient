import { Component, OnInit, Input } from '@angular/core';

import { VisaResource } from '../shared/visa-resource.model';
import { VisaResourceService } from '../../services/visa-resource.service';
import { VisaResourceSelectedService } from '../../services/visa-resource-selected.service';

@Component({
  selector: 'app-visa-resource-detail',
  templateUrl: './visa-resource-detail.component.html',
  styleUrls: ['./visa-resource-detail.component.css']
})
export class VisaResourceDetailComponent implements OnInit {

  visaResource: VisaResource;

  constructor(private visaResourceService: VisaResourceService,
              private visaResourceSelectedService: VisaResourceSelectedService) { }

  ngOnInit() {
    // Subscribe for visaResourceSelected changed
    this.visaResourceSelectedService.visaResourceSelected.subscribe(visa => this.visaResource = visa);
  }
}
