import { Component, OnInit } from '@angular/core';
import {DataAgent} from "../../data.model";
import {_fakeDataService} from "../../../services/_fake-data.service";
import {ActivatedRoute, Router} from "@angular/router";
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  data : DataAgent [] = [];
  dataAll : DataAgent [] = [];
  msg:any;
  constructor(private router: Router,
              private fakeDataService : _fakeDataService,
              private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {this.msg = params['id']});
    this.fakeDataService.getDataTableFake({}).subscribe(rs =>{
      this.dataAll = rs.result;
      this.data = this.dataAll.filter(item => item['id']==this.msg);

    })
  }

  editAgent(name:any,type:any,sex:any,role:any,age:any,event:Event){
    event.preventDefault();
    let obj = new DataAgent();
    obj.id = this.msg;
    obj.name = name.value;
    obj.type = type.value;
    obj.sex = sex.value;
    obj.role = role.value;
    obj.age = age.value;
    let index = this.dataAll.findIndex(x=>x['id']==this.msg);
    this.dataAll[index] =obj;
  }
}
