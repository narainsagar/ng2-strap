/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { AppComponent } from './app.component';

beforeEachProviders(() => [AppComponent]);

describe('App: Ng2Strap', () => {
  it('should create the app',
      inject([AppComponent], (app: AppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'Hello World!\'',
      inject([AppComponent], (app: AppComponent) => {
    expect(app.title).toEqual('Hello World!');
  }));
});
