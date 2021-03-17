import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { LogLevel, MIN_LOG_LEVEL } from '@elemental-concept/logger-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: MIN_LOG_LEVEL,
      useValue: LogLevel.verbose
    }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
