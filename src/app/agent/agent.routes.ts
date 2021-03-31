import {Routes} from "@angular/router";
import {AddComponent} from "./add/add.component";
import {EditComponent} from "./edit/edit.component";
import {AgentDetailComponent} from "./agent-detail/agent-detail.component";

export const agentRoutes : Routes = [
  {
    path: 'add',
    component: AddComponent,
  },
  {
    path: 'edit',
    component: EditComponent,
  },
  {
    path: 'detail',
    component: AgentDetailComponent,
  },
];
