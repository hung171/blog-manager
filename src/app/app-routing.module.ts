import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./agent/agent.module').then(m => m.AgentModule),
  },
  {
    path:'',
    children: [
      {
        path: 'agent',
        loadChildren: () => import('./agent/agent.module').then(m => m.AgentModule),
      },
      {
        path: 'guide',
        loadChildren: () => import('./category/category.module').then(m => m.CategoryModule),
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
