import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddComponent} from "./add/add.component";
import {EditComponent} from "./edit/edit.component";
import {AgentDetailComponent} from "./agent-detail/agent-detail.component";
import {AgentFormComponent} from "./agent-form/agent-form.component";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {agentRoutes} from "./agent.routes";



@NgModule({
  declarations: [AddComponent, EditComponent, AgentDetailComponent,AgentFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(agentRoutes),
  ]
})
export class AgentModule { }
