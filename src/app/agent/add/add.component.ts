import {AfterViewInit, Component, OnInit, ViewChild,} from '@angular/core';
import {_fakeDataService} from "../../../services/_fake-data.service";
import {DataAgent} from "../../data.model";
import {AgentFormComponent} from "../agent-form/agent-form.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit, AfterViewInit {
  data: DataAgent [] = [];
  submitted = false;

  @ViewChild(AgentFormComponent) agentFormComponent !: AgentFormComponent;

  constructor(private fakeDataService: _fakeDataService,
              private router: Router,) {
  }

  ngOnInit(): void {
    this.fakeDataService.getDataTableFake({}).subscribe(rs => {
      this.data = rs.result;
    })
  }

  ngAfterViewInit() {
    this.agentFormComponent?.agentFormGroup.valueChanges.subscribe(x => {
      if (this.agentFormComponent?.getValid() == false) this.submitted = false;
      else this.submitted = true;
    })
  }

  addAgent() {

    if (this.agentFormComponent.agentFormGroup.invalid) {
      return; // stop here if agentFormGroup is invalid
    } else {

      let data = this.agentFormComponent.getData();

      if (data) {
        this.fakeDataService.addData(data).subscribe(rs => {
        })
        this.router.navigate(['/agent']);
      }
    }
  }

  back() {
    this.router.navigate(['/agent']);
  }
}

