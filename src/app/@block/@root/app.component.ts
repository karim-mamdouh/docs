import { Component } from '@angular/core';
import { ToasterService } from 'src/app/services/toaster/toaster.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'eshtri-core';

  constructor(public toasterService: ToasterService) {}
}
