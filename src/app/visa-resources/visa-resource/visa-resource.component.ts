import { Component, OnInit } from '@angular/core';
import { VisaResourceService } from '../shared/visa-resource.service';

@Component({
  selector: 'app-visa-resource',
  templateUrl: './visa-resource.component.html',
  styleUrls: ['./visa-resource.component.css']
})
export class VisaResourceComponent implements OnInit {

  constructor(private visaResourceService: VisaResourceService) { }

  ngOnInit() {
  }

}
