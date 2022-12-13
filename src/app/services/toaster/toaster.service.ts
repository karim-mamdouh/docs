import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToasterService {
  showToaster: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  message: BehaviorSubject<string> = new BehaviorSubject<string>('');
  constructor() {}
  toggleToaster(message?: string) {
    this.message.next(message!);
    this.showToaster.next(true);
    setTimeout(() => {
      this.showToaster.next(false);
    }, 1000);
  }
}
