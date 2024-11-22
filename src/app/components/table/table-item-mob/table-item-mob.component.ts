import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TokenItem } from 'app/types/token-item';

@Component({
  selector: 'app-table-item-mob',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-item-mob.component.html',
  styleUrl: './table-item-mob.component.scss',
})
export class TableItemMobComponent {
  @Input() index!: number;
  @Input() tokenItem!: TokenItem;

  formatNumber(value: number): string {
    if (value >= 0) {
      return `+${this.formatWithCommas(value)}`;
    } else {
      return `${this.formatWithCommas(value)}`;
    }
  }

  styleFormal(value: number): boolean {
    if (value < 0) {
      return true;
    } else {
      return false;
    }
  }

  formatWithCommas(value: number): string {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    }).format(value);
  }
}
