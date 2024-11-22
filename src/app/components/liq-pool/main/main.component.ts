import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'liq-pool-main',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {}
