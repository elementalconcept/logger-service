import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { LoggerService, LogLevel } from '@elemental-concept/logger-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
  title = 'logger-service';

  form = new FormGroup({
    tag: new FormControl(''),
    message: new FormControl('')
  });

  LogLevel = LogLevel;

  logger = this.loggerService.bind('AppComponent');

  constructor(private readonly loggerService: LoggerService) {
  }

  textLog = (level: LogLevel) => this.loggerService.log(level, this.form.value.tag, this.form.value.message);

  jsonLog = () => this.logger.eJSON({ abc: 'xyz', numeric: 123 }, true);
}
