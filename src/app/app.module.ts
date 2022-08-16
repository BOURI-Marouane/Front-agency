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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BankDetailComponent } from 'src/modules/bank-detail/bank-detail.component';
import { HomeComponent } from 'src/modules/home/home.component';
import { LoginComponent } from 'src/modules/login/login.component';
import { Routes,RouterModule } from '@angular/router';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { initializeKeycloak } from 'src/utility/app.init';
import { AuthGuard } from 'src/utility/app.guard';

const routes: Routes = [
  
  {path:'agency',component:AgencyComponent,canActivate : [AuthGuard]
  },
  {path:'',component:HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AgencyComponent,
    NavbarComponent,
    AgencyAddComponent,
    AgencyFussioneComponent,
    BankDetailComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    NgbModule,
    KeycloakAngularModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  providers: [{
    provide:APP_INITIALIZER,deps:[KeycloakService],useFactory:initializeKeycloak,multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
