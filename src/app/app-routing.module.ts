import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KeycloakAuthGuard } from 'keycloak-angular';
import { AgencyComponent } from 'src/modules/agency/agency.component';
import { HomeComponent } from 'src/modules/home/home.component';
import { AuthGuardGuard } from './auth-guard.guard';
import { AuthGuard } from 'src/utility/app.guard';



@NgModule({

  exports: [RouterModule]
})
export class AppRoutingModule { }
