import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InputValidationComponent } from '../input-validation/input-validation.component';
import { InputContainerComponent } from '../input-container/input-container.component';
import { LoginPageComponent } from '../../pages/login-page/login-page.component';

@Component({
  selector: 'default-button',
  standalone: true,
  imports: [CommonModule, RouterModule, InputValidationComponent, InputContainerComponent, LoginPageComponent],
  templateUrl: './default-button.component.html',
  styleUrl: './default-button.component.css'
})
export class DefaultButtonComponent implements OnInit{

  @Input()
  type: 'submit' | 'button' = 'submit';

  @Input()
  text: string = "Submit";

  @Input()
  bgColor = '#138db6';

  @Input()
  color = 'white';

  @Input()
  fontSizeRem = 1.3;

  @Input()
  widthRem = 12;

  @Output()
  onClick = new EventEmitter();

  constructor() {}


  ngOnInit(): void {

  }
}
