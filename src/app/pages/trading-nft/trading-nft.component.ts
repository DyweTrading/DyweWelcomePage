import { Component } from '@angular/core';
import { FaqComponent } from '../../components/faq/faq.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
import { NavMobileComponent } from '../../components/nav-mobile/nav-mobile.component';
import { StartBlockComponent } from '../../components/start-block/start-block.component';
import { CollectionsComponent } from '../../components/trading-nft/collections/collections.component';
import { MainComponent } from '../../components/trading-nft/main/main.component';
// import { TopComponent } from '../../components/trading-nft/top/top.component';

@Component({
  selector: 'app-trading-nft',
  standalone: true,
  imports: [
    FooterComponent,
    StartBlockComponent,
    FaqComponent,
    NavMobileComponent,
    HeaderComponent,
    MainComponent,
    // TopComponent,
    CollectionsComponent,
  ],
  templateUrl: './trading-nft.component.html',
  styleUrl: './trading-nft.component.scss',
})
export class TradingNftComponent {}
