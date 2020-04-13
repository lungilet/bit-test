import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { MDBSpinningPreloader } from 'ng-uikit-pro-standard';

import { ButtonComponent } from './button.component';
import { ElementRef, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('Button Component', () => {
  // These are the suite of the Button tests
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;
  let button: ElementRef;
  let deBug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonComponent],
      imports: [MDBBootstrapModulesPro.forRoot()],
      providers: [MDBSpinningPreloader]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    deBug = fixture.debugElement;
    button = deBug.query(By.css('button'));
    fixture.detectChanges();
  });

  // It should create the component
  it('Button component should be created', () => {
    expect(component).toBeTruthy();
  });

  // Emit something when the button is clicked
  it('When button clicked, it should emit', () => {
    // Spying the button
    spyOn(component.buttonSubmit, 'emit');

    // Calling the function from the component
    component.buttonAction('id');

    fixture.detectChanges(); // the directive is appilied

    // The output
    expect(component.buttonSubmit.emit).toHaveBeenCalledWith('id');
  });

  it('Check if secondary or primay btn', () => {
    if (component.buttonOptions.outline === true) {
      button = deBug.query(By.css('.secondary-btn'));
    } else {
      button = deBug.query(By.css('.btn-default'));
    }
    fixture.detectChanges();
    expect(button).toBeTruthy();
  });


});
