import { TestBed, inject } from '@angular/core/testing';

import { I18nConfigService } from './i18n-config.service';

describe('I18nConfigLibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [I18nConfigService] });
  });

  it('should be created', inject(
    [I18nConfigService],
    (service: I18nConfigService) => {
      expect(service).toBeTruthy();
    }
  ));
});
