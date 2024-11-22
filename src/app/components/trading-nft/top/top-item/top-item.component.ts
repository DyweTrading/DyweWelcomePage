import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NftItem } from 'app/types/nft-item';

@Component({
  selector: 'trading-nft-top-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-item.component.html',
  styleUrl: './top-item.component.scss',
})
export class TopItemComponent {
  @Input() nftData!: NftItem;

  formatNumber(value: number): string {
    return value >= 0 ? `+${value}` : `${value}`;
  }

  shortNumber(value: number): string {
    const absValue = Math.abs(value);
    let shortened = '';

    if (absValue >= 1_000_000_000) {
      shortened = value / 1_000_000_000 + 'b';
    } else if (absValue >= 1_000_000) {
      shortened = value / 1_000_000 + 'm';
    } else if (absValue >= 1_000) {
      shortened = value / 1_000 + 'k';
    } else {
      shortened = value.toString();
    }

    // Удалим лишние нули после точки (например, 1.00 => 1)
    return shortened.replace(/\.0+$/, '');
  }

  styleFormal(value: number): boolean {
    if (value < 0) {
      return true;
    } else {
      return false;
    }
  }
}
