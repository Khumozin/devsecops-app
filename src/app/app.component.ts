import { Component, HostBinding } from '@angular/core';

import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div class="w-full h-svh flex items-center justify-center bg-slate-950">
      <span class="font-medium text-6xl text-gray-100">DevSecOps</span>
    </div>
  `,
})
export class AppComponent {
  @HostBinding('attr.app-version')
  appVersion = `v${environment.appVersion}`;
}
