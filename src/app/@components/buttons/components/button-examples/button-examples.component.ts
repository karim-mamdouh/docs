import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToasterService } from '../../../../services/toaster/toaster.service';

@Component({
  selector: 'cic-button-examples',
  templateUrl: './button-examples.component.html',
  styleUrls: ['./button-examples.component.scss'],
})
export class ButtonExamplesComponent implements OnInit {
  form: FormGroup = this._fb.group({
    textarea1: [
      {
        value: `// Secondary
<cic-button label="Secondary" severity="secondary"></cic-button>

// Success
<cic-button label="Success" severity="success"></cic-button>

// Warning
<cic-button label="Warning" severity="warning"></cic-button>

// Danger
<cic-button label="Danger" severity="danger"></cic-button>

// Help
<cic-button label="Help" severity="help"></cic-button>`,
        disabled: true,
      },
    ],
    textarea2: [
      {
        value: `// Small button
<cic-button size="sm" label="Small"></cic-button>

// Medium button
<cic-button label="Medium"></cic-button>

// Large button
<cic-button size="lg" label="Large"></cic-button>`,
        disabled: true,
      },
    ],
    textarea3: [
      {
        value: `// Rounded button
<cic-button label="Rounded" [isRounded]="true"></cic-button>

// Outline button
<cic-button label="Outline" [isOutline]="true"></cic-button>

// Text button
<cic-button label="Text" [isText]="true"></cic-button>

// Raised button
<cic-button label="Raised" [isRaised]="true"></cic-button>

// Rounded outline button
<cic-button label="Rounded Outline" [isRounded]="true" [isOutline]="true" severity="success"></cic-button>

// Rounded text button
<cic-button label="Rounded Text" [isRounded]="true" [isText]="true" severity="success"></cic-button>

// Rounded raised button
<cic-button label="Rounded Raised" [isRounded]="true" [isRaised]="true" severity="success"></cic-button>`,
        disabled: true,
      },
    ],
    textarea4: [
      {
        value: `// Text & Icon
<cic-button label="Text & Icon" btnIcon="pi-check" severity="success"></cic-button>

// Icon position
<cic-button label="Icon position" btnIcon="pi-search" iconPos="right"></cic-button>

// Icon only
<cic-button btnIcon="pi-heart" severity="danger"></cic-button>

// Icon only with outline button
<cic-button [isOutline]="true" btnIcon="pi-star-fill" severity="warning"></cic-button>`,
        disabled: true,
      },
    ],
    textarea5: [
      {
        value: `// Badge
<cic-button mode="badge" badgeValue="5" label="Badge" badgeSeverity="danger"></cic-button>

// Badge with icon
<cic-button mode="badge" badgeValue="10" label="Badge with icon" btnIcon="pi-star" severity="success" badgeSeverity="warning"></cic-button>`,
        disabled: true,
      },
    ],
  });
  constructor(
    private _fb: FormBuilder,
    public toasterService: ToasterService
  ) {}

  ngOnInit(): void {}

  clicked(control: string) {
    navigator.clipboard.writeText(this.form.controls[control].value);
    this.toasterService.toggleToaster('Copied to clipboard');
  }
}
