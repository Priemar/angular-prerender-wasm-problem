import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}


/** this is the default mechanism to bootstrap */
/*document.addEventListener('DOMContentLoaded', () => {
  platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
});*/


/** this is the way async loading the wasm before bootstrap is my preferred way, so i do not have to handle async
 * wasm loading in the app itself
 */
document.addEventListener('DOMContentLoaded', () => {
  import('mywasm')
      .then(_ => import('./app/app.module'))
      .then(module => platformBrowserDynamic().bootstrapModule(module.AppModule))
      .catch(err => console.error(err));
});
