import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SocialLinksComponent } from './social-links/social-links.component';

@Component({
  selector: 'app-nav-mobile',
  standalone: true,
  imports: [SocialLinksComponent, RouterLink],
  templateUrl: './nav-mobile.component.html',
  styleUrl: './nav-mobile.component.scss',
})
export class NavMobileComponent {}
