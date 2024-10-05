import { Component } from '@angular/core';
import { AboutComponent } from 'app/components/about/about.component';
import { FaqComponent } from 'app/components/faq/faq.component';
import { FooterComponent } from 'app/components/footer/footer.component';
import { FunctionalityComponent } from 'app/components/functionality/functionality.component';
import { HeaderComponent } from 'app/components/header/header.component';
import { MainComponent } from 'app/components/main/main.component';
import { MetricsComponent } from 'app/components/metrics/metrics.component';
import { NavMobileComponent } from 'app/components/nav-mobile/nav-mobile.component';
import { RoadmapComponent } from 'app/components/roadmap/roadmap.component';
import { SocialComponent } from 'app/components/social/social.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [
    NavMobileComponent,
    HeaderComponent,
    MainComponent,
    FunctionalityComponent,
    MetricsComponent,
    AboutComponent,
    SocialComponent,
    FaqComponent,
    RoadmapComponent,
    FooterComponent,
  ],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
})
export class WelcomeComponent {}
