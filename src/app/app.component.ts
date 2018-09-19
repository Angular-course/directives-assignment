import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showParagraph = true;
  clicksNum = [];
  // counter = 0;

    toggleParagraph = () => {
      this.showParagraph = !this.showParagraph;
      // this.counter++;
      this.clicksNum.push(new Date());
    }
}
