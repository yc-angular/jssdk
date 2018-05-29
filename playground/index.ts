/**
 * This is only for local test
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { JSSDKModule, JSSDK }  from '@yca/jssdk';

declare const window: any;

@Component({
  selector: 'app',
  template: `<h1>Hello</h1>`
})
class AppComponent {
  constructor(
    public jssdk: JSSDK,
  ) {
  }

  async ngOnInit() {
    try {
      console.log(this.jssdk.appId);
      await this.jssdk.ready();
      console.log(window.wx);
    } catch(e) {
      console.error(e);
    }
  }
}

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ],
  imports: [ BrowserModule, JSSDKModule.forRoot('abc') ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
