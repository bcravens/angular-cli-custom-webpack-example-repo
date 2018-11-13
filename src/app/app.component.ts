import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'website-cli';

  ngOnInit() {
    console.log("hi")
  }

  onClick() {
    console.log("click EDITTTT")
  }
}
