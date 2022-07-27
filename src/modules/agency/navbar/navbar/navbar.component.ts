import { Component, OnInit } from '@angular/core';
import { KeycloakSecurityService } from 'src/service_keycloak/keycloak-security.service';
import { KeycloakService } from 'keycloak-angular';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  

  constructor(public securityService:KeycloakService) { }

  ngOnInit(): void {
  }

  onLogout()
  {
    this.securityService.logout();
  }

  onLogin()
  {
    this.securityService.login();
  }

  onChangePassword()
  {
    //this.securityService.getUsername();
  }
}
