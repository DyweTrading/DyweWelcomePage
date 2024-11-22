import { Routes } from '@angular/router';
import { CommingSoonComponent } from './pages/comming-soon/comming-soon.component';
import { LiqPoolComponent } from './pages/liq-pool/liq-pool.component';
import { TradingNftComponent } from './pages/trading-nft/trading-nft.component';
import { TradingTokensComponent } from './pages/trading-tokens/trading-tokens.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: WelcomeComponent,
  },
  {
    path: 'comming-soon',
    component: CommingSoonComponent,
  },
  {
    path: 'trading-tokens',
    component: TradingTokensComponent,
  },
  {
    path: 'trading-nft',
    component: TradingNftComponent,
  },
  {
    path: 'liq-pool',
    component: LiqPoolComponent,
  },
];
