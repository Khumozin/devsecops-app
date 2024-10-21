import { Component, HostBinding } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  @HostBinding('attr.app-version')
  appVersion = `v${environment.appVersion}`;
}
