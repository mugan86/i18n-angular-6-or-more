import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { I18nConfigLibModule } from 'i18n-config-lib';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, I18nConfigLibModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
