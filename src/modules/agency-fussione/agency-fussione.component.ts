import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Agency } from 'src/model/Agency-model';
import { AgencyFussione } from 'src/model/AgencyFussione-model';
import { AgencyService } from 'src/service/agency.service';
import { AgencyModule } from '../agency.module';
import { AgencyComponent } from '../agency/agency.component';

@Component({
  selector: 'app-agency-fussione',
  templateUrl: './agency-fussione.component.html',
  styleUrls: ['./agency-fussione.component.css']
})
export class AgencyFussioneComponent implements OnInit {

  agencyFussione : AgencyFussione = {
    code_A:0,
    code_B:0,
  }
  
  myAgency : Agency = {
    code:0,
    name:'',
    adress:'',
    status:false
  }   
  agencys : Agency[] = [];
  constructor(private agencyService: AgencyService,private agencyComponent:AgencyComponent,
    @Inject(MAT_DIALOG_DATA) data: { myAgency: Agency,agencys:Agency[]}) 
    {
    this.myAgency = data.myAgency;
    this.agencys=data.agencys
    }

  ngOnInit(): void {
    console.log(this.agencys);
  }


 
}
