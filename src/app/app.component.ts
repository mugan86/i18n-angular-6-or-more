import { Component } from '@angular/core';
import { I18nConfigService } from 'projects/i18n-config/src/lib/i18n-config.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor( private translate: I18nConfigService ) {

    console.log(this.translate.getStringByLabel('GOODBYE').subscribe(data => console.log(data)));
  }
}
