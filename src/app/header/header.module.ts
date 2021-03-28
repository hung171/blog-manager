import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CategoryComponent} from "../category/category.component";
import {RouterModule} from "@angular/router";
import {headerRoutes} from "./header.routes";


@NgModule({
  declarations: [CategoryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(headerRoutes),
  ]
})
export class HeaderModule {}
