import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import { TokensService } from 'app/services/tokens.service';
import { IToken } from 'app/types/token';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { TokenItemComponent } from './token-item/token-item.component';

@Component({
  selector: 'liq-tokens-pool',
  standalone: true,
  imports: [TokenItemComponent],
  templateUrl: './tokens-pool.component.html',
  styleUrl: './tokens-pool.component.scss',
})
export class TokensPoolComponent implements AfterViewInit {
  private tokensAPI!: IToken;
  public token: IToken[] = [];

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private _tknServ: TokensService
  ) {
    this._tknServ.getTokenPrice('TON').subscribe((data) => {
      this.tokensAPI = data;
    });
    this.token = [
      {
        symbol: 'TON',
        icon: './assets/svg/toncoin-ton-logo.svg',
        volume: 'soon',
        price: this.tokensAPI?.lastPrice || '0',
        percentChange: this.tokensAPI?.priceChangePercent || '0',
      },
      {
        symbol: 'USDT',
        icon: './assets/svg/usdt-ton-logo.svg',
        volume: 'soon',
        price: '1',
        percentChange: '0',
      },
      {
        symbol: 'USDT',
        icon: './assets/svg/usdt-sol-logo.svg',
        volume: 'soon',
        price: '1',
        percentChange: '0',
      },
      {
        symbol: 'USDT',
        icon: './assets/svg/usdt-eth-logo.svg',
        volume: 'soon',
        price: '1',
        percentChange: '0',
      },
      {
        symbol: 'USDC',
        icon: './assets/svg/usdc-eth-logo.svg',
        volume: 'soon',
        price: '1',
        percentChange: '0',
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
