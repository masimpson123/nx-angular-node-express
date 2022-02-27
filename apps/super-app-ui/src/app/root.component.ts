import { Component, ViewEncapsulation } from '@angular/core';
import { ServiceService } from '@michael-nx/node-tests';
import { common } from '@michael-nx/common';

/* eslint-disable */

@Component({
  selector: 'michael-nx-nx-welcome',
  template: `
    <button (click)="auth()">AUTH</button>
    <button (click)="nasa()">NASA</button>
    <br>
    {{ content | json }}
  `,
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {
  content: any;

  constructor(public service: ServiceService) {
    console.log(common());
  }

  auth(): void {
    this.service.auth();
  }

  nasa(): void {
    this.service.nasa().subscribe(res => {
      this.content = res;
    });
  }
}
