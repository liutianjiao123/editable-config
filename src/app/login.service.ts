import { Injectable } from '@angular/core';
import {AppConfig} from './app.config';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  instrumentationKey = AppConfig.settings && AppConfig.settings.appInsights ? AppConfig.settings.appInsights.instrumentationKey : ''


  constructor() {
    if (AppConfig.settings && AppConfig.settings.logging) {
      console.log('11111111111111111111111');
    }

  }
}
