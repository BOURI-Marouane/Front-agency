import { Component, OnInit } from '@angular/core';
import { KeycloakSecurityService } from 'src/service_keycloak/keycloak-security.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  

  constructor(public securityService:KeycloakSecurityService) { }

  ngOnInit(): void {
  }

  onLogout()
  {
    this.securityService.kc.logout();
  }

  onLogin()
  {
    this.securityService.kc.login();
  }

  onChangePassword()
  {
    this.securityService.kc.accountManagement();
  }
}
