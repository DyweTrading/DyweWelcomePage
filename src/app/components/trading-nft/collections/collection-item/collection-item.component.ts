import { Component, Input } from '@angular/core';
import { NftItem } from 'app/types/nft-item';

@Component({
  selector: 'trading-nft-collection-item',
  standalone: true,
  imports: [],
  templateUrl: './collection-item.component.html',
  styleUrl: './collection-item.component.scss',
})
export class CollectionItemComponent {
  @Input() nftData!: NftItem;
}
