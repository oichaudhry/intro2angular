import { Component } from '@angular/core';

function log(target, name, descriptor) {
  console.log(target,name,descriptor)
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'intro2angular';

  @log
  aSimpleMethod(){
    console.log("Hey there!")
  }
}
