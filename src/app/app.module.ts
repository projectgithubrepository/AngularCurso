import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// template variable para variáveis em templates aninhados
//também para ngModel
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { GreetingsPipePipe } from './greetings-pipe.pipe';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { AppSizerComponent } from './app-sizer/app-sizer.component';
import { HighlightDirective } from './highlight.directive';
import { LogService } from './log.service';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    ParentComponent,
    ChildComponent,
    GreetingsPipePipe,
    ItemDetailsComponent,
    AppSizerComponent,
    HighlightDirective,
    FirstComponent,
    SecondComponent,
    ChildAComponent,
    ChildBComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
