import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { I18nConfigModule } from './../../projects/i18n-config/src/lib/i18n-config.module';
import { APP_ROUTES } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/app/', '.json');
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
      },
      isolate: true
}), APP_ROUTES],
  bootstrap: [AppComponent]
})
export class AppModule {}
