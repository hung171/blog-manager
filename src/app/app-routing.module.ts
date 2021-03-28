import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AgentComponent} from "./agent/agent.component";
import {AgentDetailComponent} from "./agent/agent-detail/agent-detail.component";
import {EditComponent} from "./agent/edit/edit.component";
import {AddComponent} from "./agent/add/add.component";
import {HeaderComponent} from "./header/header.component";

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./header/header.module').then(rs => rs.HeaderModule),
  },
  {
    path: 'agent',
    component: AgentComponent,
  },
  {
    path: 'agent/detail',
    component: AgentDetailComponent,
  },
  {
    path: 'agent/edit',
    component: EditComponent,
  },
  {
    path: 'agent/add',
    component: AddComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
