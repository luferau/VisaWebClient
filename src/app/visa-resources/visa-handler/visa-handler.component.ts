import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

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
              private visaResourceSelectedService: VisaResourceSelectedService,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.message = undefined;
    this.isResourceOpen = true;

    // Subscribe for visaResourceSelected changed
    this.visaResourceSelectedService.visaResourceSelected.subscribe(visa => this.visaResource = visa);
  }

  onOpen() {
    this.visaResourceService.open(this.visaResource.originalResourceName).
        subscribe(result => {
          this.visaResource.opened = result.success;
          if (result.success) {
            this.toastr.success('Success: ' + result.description, 'VISA Web Api');
          } else {
            this.toastr.error('Failed: ' + result.description, 'VISA Web Api');
          }
        });
  }

  onClose() {
    this.visaResourceService.close(this.visaResource.originalResourceName).
        subscribe(result => {
          if (result.success) {
            this.visaResource.opened = false;
            console.log('Success: ' + result.description);
          } else {
            console.log('Failed: ' + result.description);
          }
        });
  }

  onWrite() {
    this.visaResourceService.write(this.visaResource.originalResourceName, this.message).
        subscribe(result => {
          if (result.success) {
            console.log('Success: ' + result.description);
          } else {
            console.log('Failed: ' + result.description);
          }
        });
  }

  onRead() {
    this.visaResourceService.read(this.visaResource.originalResourceName).
    subscribe(result => {
      if (result.success) {
        console.log(`Success: ${result.data}`);
      } else {
        console.log('Failed: ' + result.description);
      }
    });
  }

  onQuery() {
    this.onWrite();
    this.onRead();
  }

  onClear() {
    this.visaResourceService.clear(this.visaResource.originalResourceName).
        subscribe(result => {
          if (result.success) {
            console.log('Success: ' + result.description);
          } else {
            console.log('Failed: ' + result.description);
          }
        });
  }
}
