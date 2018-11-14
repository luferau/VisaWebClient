import { Component, OnInit } from '@angular/core';

import { VisaResource } from '../shared/visa-resource.model';
import { VisaResourceService } from '../../services/visa-resource.service';
import { VisaResourceSelectedService } from '../../services/visa-resource-selected.service';

@Component({
  selector: 'app-visa-resources-list',
  templateUrl: './visa-resources-list.component.html',
  styleUrls: ['./visa-resources-list.component.css']
})
export class VisaResourcesListComponent implements OnInit {

  visaResources: VisaResource[];
  visaResourceSelected: VisaResource;

  constructor(private visaResourceService: VisaResourceService,
              private visaResourceSelectedService: VisaResourceSelectedService) { }

  ngOnInit() {
    // Get VISA resources
    this.getAllVisaResources();
  }

  onSelect(resource: VisaResource) {
    this.visaResourceSelected = resource;
    this.visaResourceSelectedService.changeVisaResourceSelection(resource);
  }

  getAllVisaResources(): void {
    this.visaResourceService.getAllVisaResources().subscribe((data: any) => {
      this.visaResources = data;
    });
  }

}
