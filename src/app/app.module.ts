import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { VisaResourcesComponent } from './visa-resources/visa-resources.component';
import { VisaResourceComponent } from './visa-resources/visa-resource/visa-resource.component';
import { VisaResourcesListComponent } from './visa-resources/visa-resources-list/visa-resources-list.component';

@NgModule({
  declarations: [
    AppComponent,
    VisaResourcesComponent,
    VisaResourceComponent,
    VisaResourcesListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
