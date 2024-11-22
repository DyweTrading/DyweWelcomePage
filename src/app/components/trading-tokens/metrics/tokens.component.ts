import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  Inject,
  Input,
  PLATFORM_ID,
} from '@angular/core';
import { MetricData } from 'app/types/metric-data';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ItemComponent } from './item/item.component';

@Component({
  selector: 'tokens-metrics',
  standalone: true,
  imports: [ItemComponent],
  templateUrl: './tokens.component.html',
  styleUrl: './tokens.component.scss',
})
export class TokensComponent implements AfterViewInit {
  @Input() metricsData: MetricData[] = [];
  @Input() title: string = '';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    console.log(this.metricsData);

    gsap.registerPlugin(ScrollTrigger);
    if (isPlatformBrowser(this.platformId)) {
      gsap.to('.token-metrics__content-h2', {
        y: '0px',
        opacity: '1',
        duration: 0.5,
        scrollTrigger: {
          trigger: '.token-metrics',
          start: 'top 85%',
          end: 'top 75%',
        },
      });

      gsap.to('.metric__card', {
        y: '0px',
        opacity: '1',
        duration: 0.5,
        scrollTrigger: {
          trigger: '.token-metrics',
          start: 'top 75%',
          end: 'top 65%',
        },
      });
    }
  }
}
