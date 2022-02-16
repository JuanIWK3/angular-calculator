import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  displayValue: string = '';
  firstNumber: string = '';
  secondNumber: string = '';
  waitingNumber: boolean = false;
  operator: string = '';

  @Input() dataKey: string = '';

  constructor() {}

  ngOnInit(): void {}

  numberPress(event: MouseEvent): void {
    let number = (event.target as Element).getAttribute('data-key');

    if (number !== null) {
      if (!this.waitingNumber) {
        this.firstNumber = this.firstNumber + number;
        this.displayValue = this.displayValue + number;
      } else {
        this.secondNumber = this.secondNumber + number;
        this.displayValue = this.displayValue + number;
      }
    }
  }

  clear() {
    this.firstNumber = '';
    this.secondNumber = '';
    this.displayValue = '';
  }

  add() {
    this.displayValue = `${this.firstNumber} + `;
    this.waitingNumber = true;
    this.operator = '+';
  }

  subtract() {
    this.displayValue = `${this.firstNumber} - `;
    this.waitingNumber = true;
    this.operator = '-';
  }
  multiply() {
    this.displayValue = `${this.firstNumber} * `;
    this.waitingNumber = true;
    this.operator = '*';
  }
  divide() {
    this.displayValue = `${this.firstNumber} ÷ `;
    this.waitingNumber = true;
    this.operator = '÷';
  }

  equal() {
    if (this.firstNumber !== '' && this.secondNumber !== '') {
      switch (this.operator) {
        case '+':
          this.displayValue = (
            parseFloat(this.firstNumber) + parseFloat(this.secondNumber)
          ).toString();
          break;
        case '-':
          this.displayValue = (
            parseFloat(this.firstNumber) - parseFloat(this.secondNumber)
          ).toString();
          break;
        case '*':
          this.displayValue = (
            parseFloat(this.firstNumber) * parseFloat(this.secondNumber)
          ).toString();
          break;
        case '÷':
          this.displayValue = (
            parseFloat(this.firstNumber) / parseFloat(this.secondNumber)
          ).toString();
          break;
      }
    }
    this.firstNumber = this.displayValue;
    this.secondNumber = '';
    this.waitingNumber = false;
  }
}
