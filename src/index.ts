import { NgModule, ModuleWithProviders, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JSSDK } from './service'

export * from './service';

export function JSSDKFactory(appId: string, debug: boolean) {
  return new JSSDK(appId, debug);
}

export const APPID = new InjectionToken<string>('wechat_mp_app_id');
export const DEBUG = new InjectionToken<string>('wechat_mp_debug');


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
      providers: [
        { provide: APPID, useValue: appId },
        { provide: DEBUG, useValue: debug },
        { provide: JSSDK, useFactory: JSSDKFactory, deps: [APPID, DEBUG] },
      ]
    };
  }
}
