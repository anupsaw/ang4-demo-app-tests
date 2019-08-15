import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { DebugElement, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DataServiceService } from './services/data-service.service';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  let dataService: DataServiceService;
  // let debugElement: DebugElement;
  // let htmlElement: HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [
        AppComponent
      ],
      providers: [DataServiceService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    dataService = TestBed.get(DataServiceService);
    app = fixture.componentInstance;
  });

  it('should create the app', async(() => {
    // const fixture = TestBed.createComponent(AppComponent);
    // const app = fixture.debugElement.componentInstance;
    // app = fixture.componentInstance;
    expect(app).toBeTruthy();
  }));


  it('should call service and get the data', () => {
    spyOn(dataService, 'getData')
    .and
    .returnValue(
      Observable.of({ name: 'anup', city: 'bangalore' })
    );
    app.getData();
    expect(app.data.name).toBe('anup');
  });
  // it(`should have as title 'app'`, async(() => {
  //   //  const fixture = TestBed.createComponent(AppComponent);
  //   app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('app');
  // }));

  // it('should render title in a h1 tag', async(() => {
  //   // const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   // const compiled = fixture.debugElement.nativeElement;
  //   // expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');

  //   const compiled = fixture.debugElement.query(By.css('h1'));
  //   const test: HTMLElement = compiled.nativeElement;
  //   expect(test.textContent).toContain('Welcome to app!');
  // }));

  // it('should up the counter when up button is clicked', () => {
  //   fixture = TestBed.createComponent(AppComponent);
  //   app = fixture.componentInstance;
  //   fixture.detectChanges();
  //   const button = fixture.debugElement.query(By.css('.up'));
  //   const test: HTMLElement = button.nativeElement;
  //   test.click();
  //   fixture.detectChanges();
  //   const h2 = fixture.debugElement.query(By.css('h2'));
  //   expect(h2.nativeElement.textContent).toContain('1');
  // });

});
