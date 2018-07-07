import { Component } from '@angular/core';
import { I18nConfigService } from 'i18n-config';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor( private translate: I18nConfigService ) {
    this.translate.useSelectLanguage('es');
  }
}
