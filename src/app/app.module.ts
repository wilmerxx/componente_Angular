import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgresBarComponent } from './progres-bar/progres-bar.component';
import { CountdonComponent } from './countdon/countdon.component';
import{ FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProgresBarComponent,
    CountdonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
