import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import {
  LogLevel,
  MIN_LOG_LEVEL,
  LogPrinterService,
  RemotePrinterService,
  REMOTE_LOG_SESSION_ID,
  REMOTE_LOG_CLIENT_ID, REMOTE_LOG_ENDPOINT
} from '@elemental-concept/logger-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: MIN_LOG_LEVEL,
      useValue: LogLevel.verbose
    },
    {
      provide: REMOTE_LOG_ENDPOINT,
      useValue: 'ABC'
    },
    {
      provide: LogPrinterService,
      useFactory: RemotePrinterService.factory,
      deps: [ HttpClient, REMOTE_LOG_ENDPOINT, REMOTE_LOG_SESSION_ID, REMOTE_LOG_CLIENT_ID ]
    }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
