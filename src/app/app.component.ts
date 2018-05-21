import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  colorH1 = '#1313ff';

  onClickNormal() {
    console.log('You Just Click Show on Console');
  }

  onClickDouble() {
    console.log('You Double Click');
    window.alert('Double Click');
  }

  onMouseOver() {
    console.log('You Mouse Over');
    this.colorH1 = '#ff2621';
  }

  onMouseOut() {
    this.colorH1 = '#1313ff';
  }

} // AppComponent
