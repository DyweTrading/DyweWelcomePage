import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  Inject,
  Input,
  PLATFORM_ID,
  TemplateRef,
} from '@angular/core';
import { TokenItem } from 'app/types/token-item';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { TableItemMobComponent } from './table-item-mob/table-item-mob.component';
import { TableItemComponent } from './table-item/table-item.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [TableItemComponent, TableItemMobComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent implements AfterViewInit {
  @Input() title!: TemplateRef<any>;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    if (isPlatformBrowser(this.platformId)) {
      gsap.to('.tablet__content-h2', {
        y: '0px',
        opacity: '1',
        duration: 0.5,
        scrollTrigger: {
          trigger: '.tablet',
          start: 'top 85%',
          end: 'top 75%',
        },
      });

      gsap.to('.tablet__content-table-head', {
        y: '0px',
        opacity: '1',
        duration: 0.5,
        scrollTrigger: {
          trigger: '.tablet',
          start: 'top 75%',
          end: 'top 65%',
        },
      });
      gsap.to('.table-item', {
        y: '0px',
        opacity: '1',
        duration: 0.5,
        scrollTrigger: {
          trigger: '.tablet',
          start: 'top 75%',
          end: 'top 65%',
        },
      });
      gsap.to('.table-table-item-mob', {
        y: '0px',
        opacity: '1',
        duration: 0.5,
        scrollTrigger: {
          trigger: '.tablet',
          start: 'top 75%',
          end: 'top 65%',
        },
      });
    }
  }

  public token: TokenItem[] = [
    {
      iconUrl: './assets/svg/toncoin-ton-logo.svg',
      symbol: 'TON',
      price: 40000000,
      change1h: +34000,
      change24h: -35000,
      change7d: +35000,
      volume: 20000,
    },
    {
      iconUrl: './assets/svg/toncoin-ton-logo.svg',
      symbol: 'TON',
      price: 40000000,
      change1h: +34000,
      change24h: -35000,
      change7d: +35000,
      volume: 20000,
    },
    {
      iconUrl: './assets/svg/toncoin-ton-logo.svg',
      symbol: 'TON',
      price: 40000000,
      change1h: +34000,
      change24h: -35000,
      change7d: +35000,
      volume: 20000,
    },
    {
      iconUrl: './assets/svg/toncoin-ton-logo.svg',
      symbol: 'TON',
      price: 40000000,
      change1h: +34000,
      change24h: -35000,
      change7d: +35000,
      volume: 20000,
    },
    {
      iconUrl: './assets/svg/toncoin-ton-logo.svg',
      symbol: 'TON',
      price: 40000000,
      change1h: +34000,
      change24h: -35000,
      change7d: +35000,
      volume: 20000,
    },
    {
      iconUrl: './assets/svg/toncoin-ton-logo.svg',
      symbol: 'TON',
      price: 40000000,
      change1h: +34000,
      change24h: -35000,
      change7d: +35000,
      volume: 20000,
    },
    {
      iconUrl: './assets/svg/toncoin-ton-logo.svg',
      symbol: 'TON',
      price: 40000000,
      change1h: +34000,
      change24h: -35000,
      change7d: +35000,
      volume: 20000,
    },
    {
      iconUrl: './assets/svg/toncoin-ton-logo.svg',
      symbol: 'TON',
      price: 40000000,
      change1h: +34000,
      change24h: -35000,
      change7d: +35000,
      volume: 20000,
    },
    {
      iconUrl: './assets/svg/toncoin-ton-logo.svg',
      symbol: 'TON',
      price: 40000000,
      change1h: +34000,
      change24h: -35000,
      change7d: +35000,
      volume: 20000,
    },
    {
      iconUrl: './assets/svg/toncoin-ton-logo.svg',
      symbol: 'TON',
      price: 40000000,
      change1h: +34000,
      change24h: -35000,
      change7d: +35000,
      volume: 20000,
    },
  ];
}
