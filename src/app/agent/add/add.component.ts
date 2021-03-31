import {Component, OnInit, ViewChild,} from '@angular/core';
import {_fakeDataService} from "../../../services/_fake-data.service";
import {DataAgent} from "../../data.model";
import {AgentFormComponent} from "../agent-form/agent-form.component";
import {Router} from "@angular/router";
import {AgentComponent} from "../agent.component";

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
    this.agentFormComponent.agentFormGroup.controls['id'].setValue(this.data.length + 1);
    this.fakeDataService.addData(this.agentFormComponent.agentFormGroup.value).subscribe(rs => {
      console.log(this.data);
    })
    this.router.navigate(['/agent']);
  }

  back(){
    this.router.navigate(['/agent']);
  }
}

