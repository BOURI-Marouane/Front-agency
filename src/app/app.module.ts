import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AgencyComponent } from 'src/modules/agency/agency.component';
import { NavbarComponent } from 'src/modules/agency/navbar/navbar/navbar.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AgencyAddComponent } from './agency-add/agency-add.component';

@NgModule({
  declarations: [
    AppComponent,
    AgencyComponent,
    NavbarComponent,
    AgencyAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
