import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { ProtoprintAppComponent } from '../app/protoprint.component';

beforeEachProviders(() => [ProtoprintAppComponent]);

describe('App: Protoprint', () => {
  it('should create the app',
      inject([ProtoprintAppComponent], (app: ProtoprintAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'protoprint works!\'',
      inject([ProtoprintAppComponent], (app: ProtoprintAppComponent) => {
    expect(app.title).toEqual('protoprint works!');
  }));
});
