import { Component, OnInit } from '@angular/core';
import {_fakeDataService} from "../../../services/_fake-data.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DataAgent} from "../../data.model";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  data : DataAgent [] = [];
  constructor(private fakeDataService : _fakeDataService,
              private route : ActivatedRoute,
              private router : Router) {}

  ngOnInit(): void {
    this.fakeDataService.getDataTableFake({}).subscribe(rs => {
      this.data = rs.result;
    })
  }

  add(name:any, type:any, sex:any, role:any, age:any, event:Event){
    event.preventDefault();
    let obj = new DataAgent();
    obj.id = this.data[this.data.length - 1].id + 1;
    obj.name = name.value;
    obj.type = type.value;
    obj.sex = sex.value;
    obj.role = role.value;
    obj.age = age.value;
    this.data.push(obj);
  }
}
