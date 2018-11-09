import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VisaResourcesComponent } from './visa-resources/visa-resources.component';
import { VisaResourcesListComponent } from './visa-resources/visa-resources-list/visa-resources-list.component';
import { VisaResourceDetailComponent } from './visa-resources/visa-resource-detail/visa-resource-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/visaResources', pathMatch: 'full' },
  { path: 'visaResources', component: VisaResourcesComponent },
  { path: 'visaResourcesList', component: VisaResourcesListComponent },
  { path: 'detail/:resourceName', component: VisaResourceDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
