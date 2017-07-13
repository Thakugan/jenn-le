import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { JennNavbarComponent } from './jenn-navbar/jenn-navbar.component'

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        JennNavbarComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
