import {Component, OnInit} from '@angular/core';
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

  constructor(private fakeDataService: _fakeDataService,
              private  route: ActivatedRoute,
              private router: Router,) {
  }

  ngOnInit(): void {
    this.fakeDataService.getDataTableFake({}).subscribe(rs => {
      this.data = rs.result;
    })
  }


  deleteAgent(a: any): void {
    const index = this.data.findIndex(rs => rs.id === a);
    this.data.splice(index, 1);
  }

  editAgent(id: any) {
    this.router.navigate(['/edit'], {queryParams: {id: id}});
  }

  search(): any {
    this.fakeDataService.searchData(this.searchValue.toLocaleLowerCase()).subscribe(rs => {
      this.data = rs.result
    })
  }
}
