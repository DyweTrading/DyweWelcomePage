import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SocialLinksMainComponent } from './social-links-main/social-links-main.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [SocialLinksMainComponent, RouterLink],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {}
