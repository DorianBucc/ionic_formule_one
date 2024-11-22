import { Component } from '@angular/core';

import { addIcons } from 'ionicons';
import { search, camera } from 'ionicons/icons';

@Component({
  selector: 'app-tab',
  templateUrl: 'tab.component.html',
})
export class TabComponent {
  constructor() {
    addIcons({ search, camera });
  }
}