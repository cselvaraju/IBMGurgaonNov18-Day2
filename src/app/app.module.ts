import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ActorlistComponent } from './components/actorlist/actorlist.component';
import { PipedemoComponent } from './components/pipedemo/pipedemo.component';

import { ReversetextPipe } from './pipes/reversetext.pipe';
import { PiglatinPipe } from './pipes/piglatin.pipe';

import { ActorsService } from './services/actors.service';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component'

@NgModule({
  declarations: [
    AppComponent,
    ActorlistComponent,
    PipedemoComponent,
    ReversetextPipe,
    PiglatinPipe,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    ActorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
