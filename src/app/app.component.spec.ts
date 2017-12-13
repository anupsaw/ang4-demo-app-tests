import { TestBed, async } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let debugElement: DebugElement;
  let htmlElement: HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    // const app = fixture.debugElement.componentInstance;
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    // const compiled = fixture.debugElement.nativeElement;
    // expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');

    const compiled = fixture.debugElement.query(By.css('h1'));
    const test: HTMLElement = compiled.nativeElement;
    expect(test.textContent).toContain('Welcome to app!');
  }));

  it('should up the counter when up button is clicked', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app =  fixture.componentInstance;
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('.up'));
    const test: HTMLElement = button.nativeElement;
    test.click();
    fixture.detectChanges();
    const h2 = fixture.debugElement.query(By.css('h2'));
    expect(h2.nativeElement.textContent).toContain('1');
  });

});
