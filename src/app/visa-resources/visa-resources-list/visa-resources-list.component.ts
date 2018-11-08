import { Component, OnInit } from '@angular/core';

import { VisaResource } from '../shared/visa-resource.model';
import { VisaResourceService } from '../shared/visa-resource.service';

@Component({
  selector: 'app-visa-resources-list',
  templateUrl: './visa-resources-list.component.html',
  styleUrls: ['./visa-resources-list.component.css']
})
export class VisaResourcesListComponent implements OnInit {

  visaResources: VisaResource[];

  constructor(private visaResourceService: VisaResourceService) { }

  ngOnInit() {
    this.getVisaResources();
  }

  getVisaResources(): void {
    this.visaResourceService.getVisaResources().subscribe(resources => this.visaResources = resources);
  }

}
