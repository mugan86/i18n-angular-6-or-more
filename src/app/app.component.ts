import { Component } from '@angular/core';
import { I18nConfigLibService } from 'i18n-config-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor( private translate: I18nConfigLibService ) {
    this.translate.useSelectLanguage('es');
  }
}
