import { Component, OnInit } from '@angular/core';
import {_fakeDataService} from "../../../services/_fake-data.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DataAgent} from "../../data.model";

@Component({
  selector: 'app-agent-detail',
  templateUrl: './agent-detail.component.html',
  styleUrls: ['./agent-detail.component.css']
})
export class AgentDetailComponent implements OnInit {
  data : DataAgent[] = [];

  constructor(private router: Router,
              private fakeDataService : _fakeDataService,
              private route:ActivatedRoute) { }

  ngOnInit(): void {
  }
}
