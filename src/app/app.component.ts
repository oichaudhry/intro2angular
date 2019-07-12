import { Component } from '@angular/core';

function log(target, name, descriptor) {
  console.log(target,name,descriptor)
  // Store original function in a variable
  const original = descriptor.value
  // do some manipulation with a descriptor.value
  descriptor.value = function() {
    console.log("This function was hacked!")
  }
  // return the descriptor
  return descriptor
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'intro2angular';

  constructor() {
    this.aSimpleMethod()
  }

  @log
  aSimpleMethod(){
    console.log("Hey there!")
  }
}
