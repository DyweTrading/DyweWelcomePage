import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  Inject,
  Input,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { FaqItemComponent } from './faq-item/faq-item.component';

interface Item {
  title: string;
  content: string;
  transformX: string;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [FaqItemComponent, CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
})
export class FaqComponent implements OnInit, AfterViewInit {
  @Input() isImage?: boolean = true;
  @Input() faqData?: Item[] = [];
  public faqItems: Item[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    console.log('data', this.faqData);

    if (this.faqData && this.faqData.length > 0) {
      this.faqItems = this.faqData;
    } else {
      this.faqItems = [
        {
          title: 'What is Dywe?',
          content:
            'Dywe is the first decentralised exchange within TON, offering a wide range of trading options. NFT and token futures trading, copy trading, and demo trading are available on the platform.',
          transformX: '100',
        },
        {
          title: 'How does Dywe provide security to users?',
          content:
            'Dywe provides security through smart contracts that automate and protect all transactions on the platform. Regular audits and advanced security technologies help minimise risk and ensure transparency',
          transformX: '170',
        },
        {
          title: 'How is futures trading done at Dywe?',
          content:
            'Futures trading on Dywe allows you to make trades based on predictions of NFT and token price movements. You can use various trading strategies to capitalise on market fluctuations.',
          transformX: '240',
        },
        {
          title: 'How does copytrading on Dywe work?',
          content:
            'Copytrading on Dywe allows users to automatically replicate the trades of successful traders. You can choose a trader with a good history and follow their strategies to maximise your investment.',
          transformX: '310',
        },
        {
          title: 'What assets can be traded on Dywe?',
          content:
            'NFT and tokens are available for trading on Dywe, providing a wide range of investment and diversification opportunities.',
          transformX: '380',
        },
      ];
    }
  }

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    if (isPlatformBrowser(this.platformId)) {
      gsap.to('.faq__content-h3', {
        y: '0px',
        opacity: '1',
        duration: 0.5,
        scrollTrigger: {
          trigger: '.faq',
          start: 'top 80%',
          end: 'top 70%',
        },
      });

      gsap.to('.faq__content-images', {
        x: '0px',
        opacity: '1',
        duration: 2,
        scrollTrigger: {
          trigger: '.faq',
          start: 'top 60%',
          end: 'top 50%',
        },
      });

      gsap.to('.faq-item', {
        x: '0px',
        opacity: 1,
        duration: 0.7,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: '.faq',
          start: 'top 80%',
          end: 'top 70%',
        },
      });
    }
  }

  public activeIndex: number | null = null;

  setActive(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
}
