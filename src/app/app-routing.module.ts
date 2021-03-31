import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AgentComponent} from "./agent/agent.component";
import {HeaderComponent} from "./header/header.component";

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./header/header.module').then(rs => rs.HeaderModule),
  },
  {
    path:'agent',
    component: AgentComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./agent/agent.module').then(m => m.AgentModule),
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
