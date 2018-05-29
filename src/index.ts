import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JSSDK } from './service'

export * from './service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: []
})
export class JSSDKModule {
  static forRoot(appId: string, debug: boolean = false): ModuleWithProviders {
    return {
      ngModule: JSSDKModule,
      providers: [{
        provide: JSSDK,
        useValue: new JSSDK(appId, debug),
      }]
    };
  }
}
