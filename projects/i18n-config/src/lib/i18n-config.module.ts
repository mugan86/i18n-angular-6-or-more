import { NgModule } from '@angular/core';

// To Translate imports
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { createTranslateLoader } from './translate-loader.service';
import { I18nConfigService } from './i18n-config.service';

@NgModule({
  imports: [
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  exports: [TranslateModule]
})
export class I18nConfigModule {
  static forRoot(languageCodes?: string[], defaultLang?: string) {
    return {
      ngModule: I18nConfigModule,
      providers: [I18nConfigService, { provide: 'config', useValue: { default: defaultLang, codes: languageCodes } }]
    };
  }
}
