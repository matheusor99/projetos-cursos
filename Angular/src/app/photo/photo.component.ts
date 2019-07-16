import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'pa-photo',
  templateUrl: 'photo.component.html'
})
export class PhotoComponent {
  url = 'https://www.spiria.com/sites/default/files/blog/angular-typescript.png';
  alt = 'angular-typescript';
}
