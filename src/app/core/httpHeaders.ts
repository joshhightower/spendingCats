import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import { AuthService } from './auth.service';

@Injectable()
export class HttpHeaders {

  private _headers: Headers;
  private _unsecuredHeaders:Headers;

  constructor(private authService: AuthService) {
  }

  public get headers(): Headers {
      this._headers = new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': this.authService.user.authToken
      });

      return this._headers;
  }

    public get unsecuredHeaders(): Headers {
        this._unsecuredHeaders = new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        });
        return this._unsecuredHeaders;
    }
}

