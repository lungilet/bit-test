import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DefaultSettings } from '@app/interfaces/default-settings';

const btnDefaults: DefaultSettings = {
  title: 'Button',
  type: 'submit',
  color: 'default',
  rounded: false,
  outline: false,
  id: 'general-btn-id',
  size: 'default',
  showIcon: false,
  showSpinner: false,
  icon: 'download',
};
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  /**
   * Input  of button component
   *  we are telling TypeScript to treat this as a required property, but to not validate its initialization.
   */
  @Input() buttonOptions!: DefaultSettings;
  @Output() buttonSubmit: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {
    // To always assign the defaults settings if they are not defined
    this.buttonOptions = Object.assign(
      {},
      btnDefaults,
      this.buttonOptions
    );

    this.showOnlyIcon();
  }

  /**
   *
   * @param id returns the ID.
   */
  buttonAction(id: string) {
    this.buttonSubmit.emit(id);
  }

  showOnlyIcon() {
    if (this.buttonOptions.showiconBtn === true) {
      this.buttonOptions.title = '';
    }
  }
}
