import { Component, Input } from '@angular/core';
import { MetricData } from 'app/types/metric-data';

@Component({
  selector: 't-item-metric',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss',
})
export class ItemComponent {
  @Input() data!: MetricData;
}
