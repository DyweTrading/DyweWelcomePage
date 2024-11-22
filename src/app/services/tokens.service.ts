import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IToken } from 'app/types/token';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TokensService {
  constructor(private _http: HttpClient) {}

  public getTokensPrice(): Observable<IToken[]> {
    return this._http.get<IToken[]>(
      'https://api.binance.com/api/v3/ticker/24hr?symbols=%5B%22SOLUSDT%22%2C%22SUIUSDT%22%2C%22NOTUSDT%22%2C%22TONUSDT%22%2C%22BTCUSDT%22%2C%22ETHUSDT%22%5D'
    );
  }

  public getTokenPrice(tkn: string): Observable<IToken> {
    return this._http.get<IToken>(
      `https://api.binance.com/api/v3/ticker/24hr?symbol=${tkn}USDT`
    );
  }
}
