import { Component } from '@angular/core';
import { MainComponent } from 'app/components/liq-pool/main/main.component';
import { MetricData } from 'app/types/metric-data';
import { FaqComponent } from '../../components/faq/faq.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
import { NavMobileComponent } from '../../components/nav-mobile/nav-mobile.component';
import { StartBlockComponent } from '../../components/start-block/start-block.component';
import { TokensComponent } from '../../components/trading-tokens/metrics/tokens.component';
import { TokensPoolComponent } from '../../components/liq-pool/tokens-pool/tokens-pool.component';

@Component({
  selector: 'app-liq-pool',
  standalone: true,
  imports: [
    HeaderComponent,
    NavMobileComponent,
    MainComponent,
    StartBlockComponent,
    FooterComponent,
    FaqComponent,
    MainComponent,
    TokensComponent,
    TokensPoolComponent,
  ],
  templateUrl: './liq-pool.component.html',
  styleUrl: './liq-pool.component.scss',
})
export class LiqPoolComponent {
  public data: MetricData[] = [
    {
      value: 'Soon..',
      name: 'Liquidity Provider',
    },
    {
      value: 'Soon..',
      name: 'TVL',
    },
    {
      value: 'Soon..',
      name: 'Trading Volume',
    },
    {
      value: 'Soon..',
      name: 'Open Interest',
    },
  ];
  public faqItems = [
    {
      title: 'What is a liquidity pool and how does it work?',
      content:
        'A liquidity pool is a smart contract that contains two or more cryptocurrencies that provide liquidity for trading on a decentralised exchange (DEX). Users add their assets to this pool and then traders can use it to exchange tokens. The price of the assets in the pool is determined by an automated market maker (AMM) algorithm that adjusts the balance of tokens based on supply and demand.',
      transformX: '100',
    },
    {
      title: 'What are DLP tokens, and what is their role?',
      content:
        'DLP tokens (liquidity tokens) are issued to users who add assets to the liquidity pool. These tokens represent the users share in the pool and entitle the user to receive a portion of the trading commissions. DLP tokens can also be used to withdraw their assets from the pool.',
      transformX: '170',
    },
    {
      title:
        'What are the risks associated with participating in a liquidity pool?',
      content:
        'The main risk is the volatile losses that occur when the price of one or more assets in the pool changes. If asset prices change dramatically, the value of your share in the pool may be lower than if you simply held the assets separately. However, trading commissions will fully offset these losses in the medium term.',
      transformX: '240',
    },
    {
      title: 'How are commissions earned in a liquidity pool?',
      content:
        'Commissions for each trade made through the liquidity pool are distributed among all LP-token holders in proportion to their share in the pool. This incentivises users to provide liquidity as they can earn passive income.',
      transformX: '310',
    },
    {
      title: 'Can I lose my funds in the liquidity pool?',
      content:
        'Yes, it is possible. In addition to non-permanent losses, there is a risk in case of a smart contract hack or a significant change in the price of tokens, which could lead to a decrease in the value of your assets. But you don&quot;t have to worry as all our smart contracts are audited. However, liquidity can always be withdrawn from the pool if you no longer wish to participate.',
      transformX: '380',
    },
    {
      title: 'How does adding new funds to the pool affect my share?',
      content:
        'When someone adds new funds to the pool, the total amount of liquidity increases and the number of LP tokens representing a share of the new assets also increases. Your share of the pool may decrease slightly, but the value of your LP tokens remains proportional to your share of the new pool volume.',
      transformX: '380',
    },
    {
      title: 'What happens to my LP-tokens if I want to withdraw liquidity?',
      content:
        'When you decide to withdraw your funds from the liquidity pool, you need to ‘burn’ your LP-tokens by exchanging them for a pro-rata share of the assets held in the pool at the time of withdrawal. You will receive your assets back, along with any accrued fees if they were distributed during your participation in the pool.',
      transformX: '380',
    },
  ];
}
