import { Component, OnInit,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css'],
  inputs:['parentData'],
  outputs:['childEmit']
})
export class EmployeelistComponent implements OnInit {

  public childEmit = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }
  onChange(val){
    this.childEmit.emit(val);
  }

}
