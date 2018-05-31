# @yca/jssdk

## Intro
This is a angular wrap for [@yct/jssdk](https://github.com/yc-typescript/jssdk.git)

## Installation

To install this library, run:

```bash
$ npm install @yca/jssdk --save
```

## Consuming your library

Once you have published your library to npm, you can import your library in any Angular application by running:

```bash
$ npm install @yca/jssdk
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { JSSDKModule } from '@yca/jssdk';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify your library as an import
    JSSDKModule.forRoot('appid', 'debug or not')
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your library is imported, you can use its services in your Angular application:

```ts
import { JSSDK }  from '@yca/jssdk';

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
```

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [Yu Chen](mailto:yu.chen@live.ie)
