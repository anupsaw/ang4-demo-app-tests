import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule} from '@angular/flex-layout';
import { AksFormsModule } from '@aksfw/forms';
import { DataServiceService } from './services/data-service.service';
import { AppComponent } from './app.component';
import { HighlightDirectiveDirective } from './directives/highlight-directive.directive';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirectiveDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    AksFormsModule
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
