import { Component, OnInit } from '@angular/core';
import {_fakeDataService} from "../../services/_fake-data.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DataAgent} from "../data.model";

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit {
  searchValue: string = '';
  data: DataAgent [] = [];
  isAddMode = true;
  constructor(private fakeDataService: _fakeDataService,
              private  route: ActivatedRoute,
              private router: Router,) {
  }

  ngOnInit(): void {
    this.fakeDataService.getDataTableFake({}).subscribe( rs => {
      this.data =rs.result;
      return this.data;
    })
  }

  goAgentDetail(param:any) {
    this.router.navigate(['/agent/detail'],{queryParams:{id:param}});
  }

  deleteAgent( a : any):void{
    const index = this.data.findIndex(rs => rs.id  === a);
    this.data.splice(index, 1);
    console.log(this.data);
  }

  editAgent(id:number){
    this.router.navigate(['/agent/edit'], {queryParams:{id:id}});
  }

  search(): any{
    if(this.searchValue != ''){
      this.data = this.data.filter(res =>{
        return (res.name.toLocaleLowerCase().match(this.searchValue.toLocaleLowerCase()) || res.role.toLocaleLowerCase().match(this.searchValue.toLocaleLowerCase()));
      })
    } else if(this.searchValue == ''){
        this.ngOnInit();
    }
  }
}
