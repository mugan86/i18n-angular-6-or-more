import { TestBed, inject } from '@angular/core/testing';

import { I18nConfigLibService } from './i18n-config-lib.service';

describe('I18nConfigLibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [I18nConfigLibService]
    });
  });

  it('should be created', inject([I18nConfigLibService], (service: I18nConfigLibService) => {
    expect(service).toBeTruthy();
  }));
});
