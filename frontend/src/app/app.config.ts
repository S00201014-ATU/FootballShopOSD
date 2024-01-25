import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { Kit } from './shared/models/Kit';
import { FormControl } from '@angular/forms';
import { provideToastr } from 'ngx-toastr';
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(), FormControl, provideToastr()]
};
