import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgresBarComponent } from './progres-bar/progres-bar.component';
import { CountdonComponent } from './countdon/countdon.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgresBarComponent,
    CountdonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
