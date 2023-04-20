import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { ArithmeticService } from './arithmetic.service';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { StringService } from './string.service';
import { NumberService } from './number.service';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    Child1Component,
    Child2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [ArithmeticService,NumberService,StringService],
  bootstrap: [AppComponent]
})
export class AppModule { }
