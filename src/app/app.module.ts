import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgresBarComponent } from './progres-bar/progres-bar.component';
import { CountdonComponent } from './countdon/countdon.component';
import{ FormsModule } from '@angular/forms';
import { ListaPaisesComponent } from './lista-paises/lista-paises.component';
import { PrintPaisComponent } from './print-pais/print-pais.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgresBarComponent,
    CountdonComponent,
    ListaPaisesComponent,
    PrintPaisComponent
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
