import {RouterModule, Routes} from "@angular/router";
import {CategoryComponent} from "./category.component";
import {NgModule} from "@angular/core";

export const categoryRoutingModule : Routes = [
  {
    path: '',
    component: CategoryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(categoryRoutingModule)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
