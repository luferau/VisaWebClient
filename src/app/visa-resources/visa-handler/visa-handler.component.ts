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
  messageInput: string;

  isResourceOpen: boolean;

  nChar: string;
  rChar: string;

  constructor(private visaResourceService: VisaResourceService,
              private visaResourceSelectedService: VisaResourceSelectedService,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.messageInput = undefined;
    this.isResourceOpen = true;

    this.nChar = String.fromCharCode(0x0A);
    this.rChar = String.fromCharCode(0x0D);

    // Subscribe for visaResourceSelected changed
    this.visaResourceSelectedService.visaResourceSelected.subscribe(visa => this.visaResource = visa);
  }

  showToastr(message: string, success: boolean) {
    if (success) {
      this.toastr.success(`Success<br/>${message}`, 'VISA Web Api', {enableHtml: true, closeButton: true});
    } else {
      this.toastr.error(`Failed<br/>'${message}`, 'VISA Web Api', {enableHtml: true, closeButton: true});
    }
  }

  replaceLFCRChars(message: string) {
    return this.messageInput.replace('\n', this.nChar).replace('\r', this.rChar);
  }

  onOpen() {
    this.visaResourceService.open(this.visaResource.originalResourceName).
        subscribe(result => {
          console.log(result);
          this.visaResource.opened = result.success;
          this.showToastr(result.description, result.success);
        });
  }

  onClose() {
    this.visaResourceService.close(this.visaResource.originalResourceName).
        subscribe(result => {
          console.log(result);
          this.showToastr(result.description, result.success);
          if (result.success) {
            this.visaResource.opened = false;
          }
        });
  }

  onWrite() {
    this.visaResourceService.write(this.visaResource.originalResourceName, this.replaceLFCRChars(this.messageInput)).
        subscribe(result => {
          console.log(result);
          this.showToastr(`Write operation:<br/>
                           ${result.description}`, result.success);
        });
  }

  onRead() {
    this.visaResourceService.read(this.visaResource.originalResourceName).
    subscribe(result => {
      console.log(result);
      if (result.success) {
        this.showToastr(`Read operation:<br/>
                         Return count: ${result.data.length}<br/>
                         ${result.data}`, result.success);
      } else {
        this.showToastr(`Read operation:<br/>
                         Failed:  ${result.description}`, result.success);
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
          console.log(result);
          this.showToastr(result.description, result.success);
        });
  }
}
