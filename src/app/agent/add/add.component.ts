import {Component, OnInit, ViewChild,} from '@angular/core';
import {_fakeDataService} from "../../../services/_fake-data.service";
import {DataAgent} from "../../data.model";
import {AgentFormComponent} from "../agent-form/agent-form.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  data : DataAgent [] = [];

  @ViewChild(AgentFormComponent) agentFormComponent !: AgentFormComponent ;

  constructor(private fakeDataService : _fakeDataService,
              private router: Router,) {
  }

  ngOnInit(): void {
    this.fakeDataService.getDataTableFake({}).subscribe(rs => {
      this.data = rs.result;
    })
  }

  addAgent(){
    let data = this.agentFormComponent.getData();

    if(data){
      this.fakeDataService.addData(data).subscribe(rs => {
        console.log(this.data);
      })
      this.router.navigate(['/agent']);
    }
  }

  back(){
    this.router.navigate(['/agent']);
  }
}

