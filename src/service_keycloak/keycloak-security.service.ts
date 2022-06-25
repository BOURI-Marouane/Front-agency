import { state } from '@angular/animations';
import { Injectable } from '@angular/core';
import Keycloak from "keycloak-js"

declare var keycloak:any;
@Injectable({
  providedIn: 'root'
})
export class KeycloakSecurityService {

 public kc!:Keycloak;
  constructor() { }

  async init()
  {
    console.log("Security initialisation ...")
     this.kc=new Keycloak({
       url:"http://localhost:8080/auth",
       realm:"agency-realm",
       clientId:"AngularAgency"
   });
   await this.kc.init({
    //onLoad:'login-required',
     onLoad:'check-sso',
    
     //promiseType:'
     //onLoad:'check-sso',
 
   });
   console.log(this.kc.tokenParsed?.name);
  }
}
