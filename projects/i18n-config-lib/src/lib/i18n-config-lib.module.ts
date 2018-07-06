import { NgModule } from '@angular/core';

// To Translate imports
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { createTranslateLoader } from './translate-loader.service';
import { I18nConfigLibService } from './i18n-config-lib.service';
import { ExampleComponent } from './example.component';

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
  exports: [ExampleComponent, TranslateModule],
  declarations: [ExampleComponent]
})
export class I18nConfigLibModule {
  static forRoot(languageCodes?: string[], defaultLang?: string) {
    return {
      ngModule: I18nConfigLibModule,
      providers: [
        I18nConfigLibService,
        {
          provide: 'config',
          useValue: { default: defaultLang, codes: languageCodes }
        }
      ]
    };
  }
}
