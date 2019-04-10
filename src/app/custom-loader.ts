import { Injectable, Injector } from '@angular/core';
import {TranslateLoader} from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
@Injectable()
export class LanguageLoader implements TranslateLoader {
  constructor(private inej: Injector) {}

  getTranslation(lang: string): Observable<any> {
    const http = this.inej.get(HttpClient);
    return http.get(`./assets/i18n/${lang}.json`);
  }
}
