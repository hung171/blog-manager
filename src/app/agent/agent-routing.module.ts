import {RouterModule, Routes} from "@angular/router";
import {AddComponent} from "./add/add.component";
import {EditComponent} from "./edit/edit.component";
import {AgentDetailComponent} from "./agent-detail/agent-detail.component";
import {AgentComponent} from "./agent.component";
import {NgModule} from "@angular/core";
import {categoryRoutingModule} from "../category/category-routing.module";

export const agentRoutingModule : Routes = [
  {
    path: '',
    component: AgentComponent,
  },
  {
    path: 'add',
    component: AddComponent,
  },
  {
    path: 'edit',
    component: EditComponent,
  },
  {
    path: 'detail/:id',
    component: AgentDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(agentRoutingModule)],
  exports: [RouterModule]
})
export class AgentRoutingModule {
}
