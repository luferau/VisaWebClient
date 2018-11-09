import { Component, OnInit } from '@angular/core';

import { VisaResource } from '../shared/visa-resource.model';
import { VisaResourceService } from '../../services/visa-resource.service';
import { VisaResourceSelectedService } from '../../services/visa-resource-selected.service';

@Component({
  selector: 'app-visa-handler',
  templateUrl: './visa-handler.component.html',
  styleUrls: ['./visa-handler.component.css']
})
export class VisaHandlerComponent implements OnInit {

  visaResource: VisaResource;
  command: string;

  isResourceOpen: boolean;

  constructor(private visaResourceService: VisaResourceService,
              private visaResourceSelectedService: VisaResourceSelectedService) { }

  ngOnInit() {
    this.command = undefined;
    this.isResourceOpen = true;

    // Subscribe for visaResourceSelected changed
    this.visaResourceSelectedService.visaResourceSelected.subscribe(visa => this.visaResource = visa);
  }

  onOpen() {
    console.log(`onOpen ${this.visaResource.alias}`);
    this.visaResourceService.openVisaResource(this.visaResource.alias);
  }

  onClose() {
    console.log('onClose');
  }

  onWrite() {
    console.log(`onWrite ${this.command}`);
  }

  onQuery() {
    console.log('onQuery');
  }

  onRead() {
    console.log('onRead');
  }
}
