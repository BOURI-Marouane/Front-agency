import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Agency } from 'src/model/Agency-model';
@Injectable({
  providedIn: 'root'
})
export class AgencyService {

  constructor(private http:HttpClient) { }
  findAll()
  {
    return this.http.post<any>("http://localhost:8888/agency/all",[]) 
  }
  delete([agency]:[Agency])
  {
    console.log(agency);
    return this.http.post("http://localhost:8888/agency/delete",agency)
  }
  persiste([agency] : [Agency])
  {
    //console.log(agency)
    return this.http.post('http://localhost:8888/agency/save',agency)
  }
  update([agency]:[Agency])
  {
    return this.http.post<any>("http://localhost:8888/agency/update",agency)
  }
}
