import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { DataServiceService } from './services/data-service.service';
import { AppComponent } from './app.component';
import { HighlightDirectiveDirective } from './directives/highlight-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirectiveDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
