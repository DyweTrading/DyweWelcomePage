import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TokenItem } from 'app/types/token-item';

@Component({
  selector: 'app-table-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-item.component.html',
  styleUrl: './table-item.component.scss',
})
export class TableItemComponent {
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
