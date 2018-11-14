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
  message: string;

  isResourceOpen: boolean;

  constructor(private visaResourceService: VisaResourceService,
              private visaResourceSelectedService: VisaResourceSelectedService) { }

  ngOnInit() {
    this.message = undefined;
    this.isResourceOpen = true;

    // Subscribe for visaResourceSelected changed
    this.visaResourceSelectedService.visaResourceSelected.subscribe(visa => this.visaResource = visa);
  }

  onOpen() {
    this.visaResourceService.open(this.visaResource.originalResourceName).
        subscribe(data => {
          this.visaResource.opened = data.success;
          if (data.success) {
            console.log('Success: ' + data.description);
          } else {
            console.log('Failed: ' + data.description);
          }
        });
  }

  onClose() {
    this.visaResourceService.close(this.visaResource.originalResourceName).
        subscribe(data => {
          if (data.success) {
            this.visaResource.opened = false;
            console.log('Success: ' + data.description);
          } else {
            console.log('Failed: ' + data.description);
          }
        });
  }

  onWrite() {
    this.visaResourceService.write(this.visaResource.originalResourceName, this.message).
        subscribe(data => {
          if (data.success) {
            console.log('Success: ' + data.description);
          } else {
            console.log('Failed: ' + data.description);
          }
        });
  }

  onQuery() {
    console.log('onQuery');
  }

  onRead() {
    console.log('onRead');
  }
}
