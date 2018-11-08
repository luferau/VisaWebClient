import { Component, OnInit } from '@angular/core';
import { VisaResourceService } from './shared/visa-resource.service';

@Component({
  selector: 'app-visa-resources',
  templateUrl: './visa-resources.component.html',
  styleUrls: ['./visa-resources.component.css'],
  providers: [VisaResourceService]
})
export class VisaResourcesComponent implements OnInit {

  constructor(private visaResourceService: VisaResourceService) { }

  ngOnInit() {
  }

}
