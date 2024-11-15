import { Component } from '@angular/core';

import { addIcons } from 'ionicons';
import { library, playCircle, radio, search } from 'ionicons/icons';

@Component({
  selector: 'app-tab',
  templateUrl: 'tab.component.html',
})
export class TabComponent {
  constructor() {
    addIcons({ library, playCircle, radio, search });
  }
}