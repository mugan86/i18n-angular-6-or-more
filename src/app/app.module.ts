import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { I18nConfigModule } from 'i18n-config';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, I18nConfigModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
