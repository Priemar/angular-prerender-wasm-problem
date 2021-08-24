import { Component } from '@angular/core';

/** Scenario 2: you also need to uncomment this import for scenario 2 */
// import * as wasm from 'mywasm';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  /** Scenario 1: loading the wasm async is working with prerendering */
  async scenarioOne(): Promise<void> {
    const lib = await import('mywasm');
    lib.test();
  }

  /** Scenario 2: Uncomment and prerendering breaks. **/
  /*scenarioTwo(): void {
    const dummyObject = new wasm.DummyObject();
    dummyObject.increase_number();
    console.log(wasm.test());
  }*/


}
