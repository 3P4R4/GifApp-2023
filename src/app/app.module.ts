import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GifsModule } from './gifs/gifs.module';
import { ShareModule } from './share/share.module';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GifsModule,
    ShareModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
