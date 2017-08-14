import { Component,OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  public fname ="";
  public child:string;
  public EmployeeA=[];
  constructor(private _empservice:EmployeeService ){}
  ngOnInit(){
    this._empservice.getEmployeeHttp().subscribe(resEmpData => this.EmployeeA = resEmpData);
  }
}
