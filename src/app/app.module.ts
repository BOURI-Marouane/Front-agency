import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AgencyComponent } from 'src/modules/agency/agency.component';
import { NavbarComponent } from 'src/modules/agency/navbar/navbar/navbar.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AgencyAddComponent } from 'src/modules/agency-add/agency-add.component';
import { AgencyFussioneComponent } from 'src/modules/agency-fussione/agency-fussione.component';
import { KeycloakSecurityService } from 'src/service_keycloak/keycloak-security.service';

export function kcFactory(kcSecurity:KeycloakSecurityService)
{
    return ()=> kcSecurity.init();
}

@NgModule({
  declarations: [
    AppComponent,
    AgencyComponent,
    NavbarComponent,
    AgencyAddComponent,
    AgencyFussioneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [{
    provide:APP_INITIALIZER,deps:[KeycloakSecurityService],useFactory:kcFactory,multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
