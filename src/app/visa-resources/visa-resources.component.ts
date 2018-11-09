import { Component, OnInit } from '@angular/core';
import { VisaResourceService } from '../services/visa-resource.service';

@Component({
  selector: 'app-visa-resources',
  templateUrl: './visa-resources.component.html',
  styleUrls: ['./visa-resources.component.css'],
  providers: [VisaResourceService]
})
export class VisaResourcesComponent implements OnInit {

  constructor(private visaResourceService: VisaResourceService) { }

  ngOnInit() {
    // It's a good place to put initialization logic
  }

}
