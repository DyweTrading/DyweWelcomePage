import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IToken } from 'app/types/token';

@Component({
  selector: 'trading-token-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './token.component.html',
  styleUrl: './token.component.scss',
})
export class TokenComponent {
  @Input() tokenData!: IToken;

  formatNumber(value: number | string): string {
    if (Number(value) >= 0) {
      return `+${this.formatWithCommas(value)}`;
    } else {
      return `${this.formatWithCommas(value)}`;
    }
  }

  styleFormal(value: number | string): boolean {
    if (Number(value) < 0) {
      return true;
    } else {
      return false;
    }
  }

  formatWithCommas(value: number | string): string {
    if (Math.abs(Number(value)) < 0.01) {
      return Number(value).toFixed(6);
    }

    return Number(value).toFixed(1);
  }
}
