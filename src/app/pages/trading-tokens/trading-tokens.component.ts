import { Component } from '@angular/core';
import { StartBlockComponent } from 'app/components/start-block/start-block.component';
import { MetricData } from 'app/types/metric-data';
import { FaqComponent } from '../../components/faq/faq.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
import { NavMobileComponent } from '../../components/nav-mobile/nav-mobile.component';
// import { TableComponent } from '../../components/table/table.component'
import { MainComponent } from '../../components/trading-tokens/main/main.component';
import { TokensComponent } from '../../components/trading-tokens/metrics/tokens.component';
import { TokensBlockComponent } from '../../components/trading-tokens/tokens/tokens.component';

@Component({
  selector: 'app-trading-tokens',
  standalone: true,
  imports: [
    NavMobileComponent,
    HeaderComponent,
    FaqComponent,
    FooterComponent,
    MainComponent,
    // TableComponent,
    TokensComponent,
    TokensBlockComponent,
    StartBlockComponent,
  ],
  templateUrl: './trading-tokens.component.html',
  styleUrl: './trading-tokens.component.scss',
})
export class TradingTokensComponent {
  public data: MetricData[] = [
    {
      value: 'Soon..',
      name: 'Total Trading Volume',
    },
    {
      value: 'Soon..',
      name: 'User Retention Rate',
    },
    {
      value: 'Soon..',
      name: 'Active Traders',
    },
    {
      value: 'Soon..',
      name: 'Liquidity',
    },
  ];
}
