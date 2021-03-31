import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AgentComponent } from './agent/agent.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AgentModule} from "./agent/agent.module";



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AgentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AgentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
