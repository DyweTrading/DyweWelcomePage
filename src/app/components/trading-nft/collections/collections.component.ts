import { Component } from '@angular/core';
import { NftItem } from 'app/types/nft-item';
import { CollectionItemComponent } from './collection-item/collection-item.component';

@Component({
  selector: 'trading-nft-collections',
  standalone: true,
  imports: [CollectionItemComponent],
  templateUrl: './collections.component.html',
  styleUrl: './collections.component.scss',
})
export class CollectionsComponent {
  public nftItems: NftItem[] = [
    {
      icon: 'https://i.getgems.io/5QoaCbH0BG6neb0s8GBQpyVkVT_2WKerGMqX2Rt2UNg/rs:fill:200:200:1/g:ce/att:1/czM6Ly9nZXRnZW1zLXMzL25mdC1jb250ZW50LWNhY2hlL2ltYWdlcy9FUUFPUWR3ZHc4a0dmdEpDU0ZnT0VyTTFtQmpZUGU0REJQcTgtQWhGNnZyOXNpNU4vYjYxNTZkZmQwNDE3MjkzYQ',
      collName: 'Anonymous Telegram Numbers',
      floor: 'soon',
      volume: 50_000,
      volChange: 3.3,
    },
    {
      icon: 'https://i.getgems.io/EZvkWtLtk-y_ehjW6PR7_V7YrL5jMYEk8BdhWdomyfU/rs:fill:200:200:1/g:ce/czM6Ly9nZXRnZW1zLXMzL25mdC1jb250ZW50LWNhY2hlL2ltYWdlcy9FUUFvOTJEWU1va3hnaEtjcS1Da0NHU2tfTWdYWTVGbzFTUFcyMGdrdlpsNzVpQ04vZTMwNDE2MTRjY2MwMzIxYw',
      collName: 'TON Punks',
      floor: 'soon',
      volume: 50_000,
      volChange: 3.3,
    },
    {
      icon: 'https://i.getgems.io/DZMSQOXKCChCBB9YA1LDvhKZ06UBzLsWrSpTXMz4iWg/rs:fill:200:200:1/g:ce/czM6Ly9nZXRnZW1zLXMzL25mdC1jb250ZW50LWNhY2hlL2ltYWdlcy9FUURta2o2NUFiX20wYVphVzhJcEt3NGtZcUlnSVR3X0hSc3RZRWtWUTZOSVlDeVcvNjhhZjY3Y2JlMDEyYmRlOV8xOGVkZDMxOGQyNA',
      collName: 'Notcoin Vouchers',
      floor: 'soon',
      volume: 50_000,
      volChange: 3.3,
    },
    {
      icon: 'https://i.getgems.io/GXvQdRbbsWQHH3ZcU1AsHRLOPYGKxlnYxjqIUuHE0Vw/rs:fill:200:200:1/g:ce/czM6Ly9nZXRnZW1zLXMzL25mdC1jb250ZW50LWNhY2hlL2ltYWdlcy9FUURWQzRjZjBfR3RGNmVrRmJjamk2SkpZbXVIRmRubU03UWl2SG1aTlIwTTB1WEsvMTAzMGIxZDBiNDc1MTVkOA',
      collName: 'DAOLama',
      floor: 'soon',
      volume: 50_000,
      volChange: 3.3,
    },
  ];
}
