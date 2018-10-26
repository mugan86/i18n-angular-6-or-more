# Language Config Library in Angular 6+

This library use @ngx-translate dependencies and its own service to manage the translations in the language selects that can be by configuration and in case it is not configured by default the language of the browser.

**This library works in Angular 6+**

## Instructions to install and configure

### From NPM (Stable version)
```ssh
$ npm install i18n-config --save
```

and then from your Angular AppModule:
```typescript
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
// Import our library
import { I18nConfigModule } from 'i18n-config';
 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // Specify my library as an import
    I18nConfigModule.forRoot() // to load default values ['en', 'es'], 'es'
    // OR assign we want values (we must add langcode.json files in src/assets!!!)
    I18nConfigModule.forRoot(['es', 'ca', 'pt', 'eu', 'en'], 'es')
  ],
  providers: [],
  bootstrap: [AppComponent]
  })
export class AppModule { }
```

then from your Angular AppComponent to use I18nConfigService to load translate files:

```typescript

import { I18nConfigService } from 'i18n-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private langService: I18nConfigService) {}
}
```

If you select want language:

```typescript

import { I18nConfigService } from 'i18n-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private langService: I18nConfigService) {
    langService.useSelectLanguage('es'); //Load spanish language although i select from config basque
  }
}
```
Finally, we must add the translation files to the correct directory, which will be in ***src/assets/i18n/select-language-code.json***. For example for Spanish, we must add the file ***src/assets/i18n/es.json***.

## How to use it in the template?

Now having all this correctly configured, we visualize it in the layout making use of Pipe 'translate'

```html
{{ 'label' | translate}}
```

'label' is a one value that load text from <language-code-of-select-language>.json

## Last udpate data: 2018/10/26

## License

***MIT © Anartz Mugika***

