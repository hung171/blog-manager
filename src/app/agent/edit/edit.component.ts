import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {_fakeDataService} from "../../../services/_fake-data.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AgentFormComponent} from "../agent-form/agent-form.component";
import {DataAgent} from "../../data.model";


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, AfterViewInit {
  data: DataAgent = {};
  msg: any;
  submitted = false;

  @ViewChild(AgentFormComponent) agentFormComponent !: AgentFormComponent;

  constructor(private router: Router,
              private fakeDataService: _fakeDataService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.msg = params['id'];
    });

    if (this.msg) {
      this.fakeDataService.getDataTableFake({id: this.msg}).subscribe(rs => {
        this.data = rs.result;
      })
    }
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.fakeDataService.getDataTableFake({id: this.msg}).subscribe(rs => {
        this.agentFormComponent.setFormData(rs.result);
      });
    }, 0);

    this.agentFormComponent?.agentFormGroup.valueChanges.subscribe(x => {
      if (this.agentFormComponent?.getValid() == false) this.submitted = false;
      else this.submitted = true;
    })
  }

  editAgent() {
    let data = this.agentFormComponent.getData();

    if (data) {
      this.fakeDataService.updateData(this.msg, data).subscribe(rs => {
      })
      this.router.navigate(['/agent']);
    }
  }

  back() {
    this.router.navigate(['/agent']);
  }
}
