import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { VisaResourcesComponent } from './visa-resources/visa-resources.component';
import { VisaResourceDetailComponent } from './visa-resources/visa-resource-detail/visa-resource-detail.component';
import { VisaResourcesListComponent } from './visa-resources/visa-resources-list/visa-resources-list.component';
import { AppRoutingModule } from './app-routing.module';
import { VisaHandlerComponent } from './visa-resources/visa-handler/visa-handler.component';

@NgModule({
  declarations: [
    AppComponent,
    VisaResourcesComponent,
    VisaResourceDetailComponent,
    VisaResourcesListComponent,
    VisaHandlerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
