import { Component, Inject, Input, OnInit } from '@angular/core';
import { Agency } from 'src/model/Agency-model';
import { AgencyService } from 'src/service/agency.service';
import { AgencyComponent } from 'src/modules/agency/agency.component';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-agency-add',
  templateUrl: './agency-add.component.html',
  styleUrls: ['./agency-add.component.css']
})
export class AgencyAddComponent implements OnInit {

  

  myAgency : Agency = {
    code:0,
    name:'',
    adress:'',
    status:false
  }

  agencys : Agency[] = [];
  constructor(private agencyService: AgencyService,private agencyComponent:AgencyComponent,
    @Inject(MAT_DIALOG_DATA) data: { myAgency: Agency }) 
    {
    this.myAgency = data.myAgency;
    }

  ngOnInit()
  {
    this.getTasks();
    console.log(this.myAgency);
  }
   
   getAgency()
   {
    
   }

  getTasks()
  {  
    this.agencyService.findAll().subscribe( agencys=> this.agencys=agencys)
   // this.taskService.findAll().subscribe(tasks => this.tasks = tasks)
  }
  persisteTask()
  {
    //this.agencyService.findAll().subscribe( agencys=> this.agencys=agencys)
    //console.log(this.agencys);
    this.agencyService.persiste([this.myAgency]).subscribe((agency : any) => {
      this.agencys = [agency, ...this.agencys];
      this.resetTask(); 
    }
    )
    console.log(this.agencys);
  }
  resetTask()
  {
    this.myAgency = 
    {
      code:0,
      name : '',
      adress:'',
      status:false
    }
  }

  updateTask()
  {
    this.agencyService.update([this.myAgency])
    .subscribe(() => {
        this.resetTask();
   
    })
  }

 

}
