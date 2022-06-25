import { Component, OnInit } from '@angular/core';
import { KeycloakSecurityService } from 'src/service_keycloak/keycloak-security.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public securityService:KeycloakSecurityService) { }

  ngOnInit(): void {
  }

  onLogin()
  {
    this.securityService.kc.login();
  }

}
