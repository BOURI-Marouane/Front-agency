import { Component, Injectable, OnInit } from '@angular/core';
import { Agency } from 'src/model/Agency-model';
import { AgencyService } from 'src/service/agency.service';
import { MatDialog } from '@angular/material/dialog';
import { AgencyAddComponent } from 'src/app/agency-add/agency-add.component';



@Injectable({
  providedIn:'root'
})
@Component({
  selector: 'app-agency',
  templateUrl: './agency.component.html',
  styleUrls: ['./agency.component.css']
})
export class AgencyComponent implements OnInit {

  myAgency : Agency = {
    code : 0,
    name:'',
    adress:'',
    status:false
  }
 
   agencys : Agency[] = [];
   constructor(private agencyService: AgencyService, public dialog : MatDialog) {
    }
   ngOnInit()
   {
     this.getTasks();
   }
   getTasks()
   {  
     this.agencyService.findAll().subscribe( agencys=> this.agencys=agencys)
    // this.taskService.findAll().subscribe(tasks => this.tasks = tasks)
   }



   deleteTask(agency:Agency)
   {
     this.agencyService.delete([agency])
     .subscribe(()=> {this.agencys = this.agencys.filter(agenc=>agenc.code != agency.code)})
     console.log(this.agencys)
   }



  openDialog()
  {
    this.dialog.open(AgencyAddComponent,{
  
      data:{
          myAgency: {
            name:'',
            adress:''
          }
      }
    });
  } 


  editTask(agency : Agency)
  {
    this.myAgency=agency;
    console.log(this.myAgency);
    this.dialog.open(AgencyAddComponent, { data: {
      myAgency: this.myAgency
    }});
  }

}
