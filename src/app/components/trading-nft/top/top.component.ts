import { Component } from '@angular/core';
import { NftItem } from 'app/types/nft-item';
import { TopItemComponent } from './top-item/top-item.component';

@Component({
  selector: 'trading-nft-top',
  standalone: true,
  imports: [TopItemComponent],
  templateUrl: './top.component.html',
  styleUrl: './top.component.scss',
})
export class TopComponent {
  public nftItems: NftItem[] = [
    {
      icon: './assets/png/image1.png',
      collName: 'Colletion Name',
      floor: 123,
      volume: 50_000,
      volChange: 3.3,
    },
    {
      icon: './assets/png/image1.png',
      collName: 'Colletion Name',
      floor: 123,
      volume: 50_000,
      volChange: 3.3,
    },
    {
      icon: './assets/png/image1.png',
      collName: 'Colletion Name',
      floor: 123,
      volume: 50_000,
      volChange: 3.3,
    },
    {
      icon: './assets/png/image1.png',
      collName: 'Colletion Name',
      floor: 123,
      volume: 50_000,
      volChange: 3.3,
    },
    {
      icon: './assets/png/image1.png',
      collName: 'Colletion Name',
      floor: 123,
      volume: 50_000,
      volChange: -3.3,
    },
    {
      icon: './assets/png/image1.png',
      collName: 'Colletion Name',
      floor: 123,
      volume: 50_000,
      volChange: -3.3,
    },
    {
      icon: './assets/png/image1.png',
      collName: 'Colletion Name',
      floor: 123,
      volume: 50_000,
      volChange: 3.3,
    },
    {
      icon: './assets/png/image1.png',
      collName: 'Colletion Name',
      floor: 123,
      volume: 50_000,
      volChange: 3.3,
    },
    {
      icon: './assets/png/image1.png',
      collName: 'Colletion Name',
      floor: 123,
      volume: 50_000,
      volChange: 3.3,
    },
    {
      icon: './assets/png/image1.png',
      collName: 'Colletion Name',
      floor: 123,
      volume: 50_000,
      volChange: 3.3,
    },
  ];
}
