import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import "rxjs/add/operator/map";

@Injectable()
export class EmployeeService {

  constructor(private _http: Http) { }
  public employeeArray=[
    {"id":1,"name":"ajay","place":"TVL"},
    {"id":2,"name":"pradeep","place":"MDU"},
    {"id":3,"name":"surya","place":"KVP"},
  ];
  public getEmployeeData(){
    return [
      {"id":1,"name":"ajay","place":"TVL"},
    {"id":2,"name":"pradeep","place":"MDU"},
    {"id":3,"name":"surya","place":"KVP"},
    ];
  }
  public getEmployeeHttp(){
    return this._http.get("https://www.w3schools.com/angular/customers.php").map((res: Response) => res.json());
  }
}
