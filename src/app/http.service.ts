import { Injectable } from '@angular/core';
import {AppConfig} from './app.config';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  protected apiServer = AppConfig.settings.apiServer;

  constructor() {
    if(AppConfig.settings.aad.requireAuth) {
      console.log(this.apiServer);
    }
  }
}
