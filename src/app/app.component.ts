import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TokensService } from './services/tokens.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  providers: [TokensService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'DyweWelcomePage';
}
