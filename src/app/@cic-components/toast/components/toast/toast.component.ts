import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { MessageSeverity } from '@cic-garage/cic-core-library';
import { MessageService } from 'primeng/api';
import { ToastPosition } from '../../models/toast-model';

@Component({
  selector: 'cic-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class CICToastComponent implements OnInit, OnChanges {
  //#region declerations
  @Input() severity: MessageSeverity = 'info';
  @Input() showToast: boolean = false;
  @Input() summary!: string;
  @Input() details!: string;
  @Input() key!: string;
  @Input() position: ToastPosition = 'top-right';
  @Input() isSticky: boolean = false;
  //#endregion declerations

  constructor(private __messageService: MessageService) {}

  //#region methods
  ngOnInit(): void {
    if (!this.key) {
      throw new Error('Key is required to show toast');
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['showToast']?.currentValue) {
      this.__messageService.add({
        key: this.key,
        summary: this.summary,
        detail: this.details,
        severity: this.severity,
        sticky: this.isSticky,
      });
    } else {
      this.__messageService.clear();
    }
  }
  //#endregion methods
}
