import { TranslateService } from '@ngx-translate/core';
import { Component } from '@angular/core';
import { I18nConfigService } from 'projects/i18n-config/src/public_api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor( private translate: TranslateService ) {

    // this.translate.getStringByLabel('GOODBYE').subscribe(data => console.log(data));
    this.translate.setDefaultLang(localStorage.getItem('selectLanguage'));
  }
}
