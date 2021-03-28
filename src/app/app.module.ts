import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AgentComponent } from './agent/agent.component';
import {FormsModule} from "@angular/forms";
import { AgentDetailComponent } from './agent/agent-detail/agent-detail.component';
import { EditComponent } from './agent/edit/edit.component';
import { AddComponent } from './agent/add/add.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AgentComponent,
    AgentDetailComponent,
    EditComponent,
    AddComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
