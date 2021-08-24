import { Component } from '@angular/core';
// import * as wasm from 'mywasm';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ssr-wasm';

  test(): void {
    // console.log(wasm.test());
    /*const dummyObject = new wasm.DummyObject();
    dummyObject.increase_number();*/
  }

  async testAsync(): Promise<void> {
    const lib = await import('mywasm');
    lib.test();
  }
}
