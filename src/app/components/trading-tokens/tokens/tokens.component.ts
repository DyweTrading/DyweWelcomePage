import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import { IToken } from 'app/types/token';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { TokensService } from './../../../services/tokens.service';
import { TokenComponent } from './token/token.component';

@Component({
  selector: 'trading-tokens-block',
  standalone: true,
  imports: [TokenComponent],
  templateUrl: './tokens.component.html',
  styleUrl: './tokens.component.scss',
})
export class TokensBlockComponent implements AfterViewInit {
  private tokensAPI: IToken[] = [];
  public token: IToken[] = [];

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private _tknServ: TokensService
  ) {
    this._tknServ.getTokensPrice().subscribe((data) => {
      console.log(data);
      this.tokensAPI = data;
    });

    this.token = [
      {
        symbol: 'BTC',
        icon: './assets/svg/btc-logo.svg',
        volume: 'soon',
        price: this.tokensAPI[0]?.lastPrice || '0',
        percentChange: this.tokensAPI[0]?.priceChangePercent || '0',
      },
      {
        symbol: 'ETH',
        icon: './assets/svg/eth-logo.svg',
        volume: 'soon',
        price: this.tokensAPI[1]?.lastPrice || '0',
        percentChange: this.tokensAPI[1]?.priceChangePercent || '0',
      },
      {
        symbol: 'SOL',
        icon: './assets/svg/Solana.svg',
        volume: 'soon',
        price: this.tokensAPI[2]?.lastPrice || '0',
        percentChange: this.tokensAPI[3]?.priceChangePercent || '0',
      },
      {
        symbol: 'SUI',
        icon: './assets/png/sui-logo.png',
        volume: 'soon',
        price: this.tokensAPI[3]?.lastPrice || '0',
        percentChange: this.tokensAPI[3]?.priceChangePercent || '0',
      },
      {
        symbol: 'NOT',
        icon: './assets/svg/notcoin.svg',
        volume: 'soon',
        price: this.tokensAPI[4]?.lastPrice || '0',
        percentChange: this.tokensAPI[4]?.priceChangePercent || '0',
      },
      {
        symbol: 'TON',
        icon: './assets/svg/toncoin-ton-logo.svg',
        volume: 'soon',
        price: this.tokensAPI[5]?.lastPrice || '0',
        percentChange: this.tokensAPI[5]?.priceChangePercent || '0',
      },
    ];
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      gsap.registerPlugin(ScrollTrigger);
      if (isPlatformBrowser(this.platformId)) {
        gsap.to('.tokens__content-h2', {
          y: '0px',
          opacity: '1',
          duration: 0.5,
          scrollTrigger: {
            trigger: '.tokens',
            start: 'top 85%',
            end: 'top 75%',
          },
        });

        gsap.to('.token', {
          y: '0px',
          opacity: '1',
          duration: 0.5,
          scrollTrigger: {
            trigger: '.tokens',
            start: 'top 75%',
            end: 'top 65%',
          },
        });
      }
    });
  }
}
