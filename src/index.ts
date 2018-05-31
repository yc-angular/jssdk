import { NgModule, ModuleWithProviders, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JSSDK } from './service'

export * from './service';

export function JSSDKFactory(appId: string, debug: boolean, https: boolean) {
  return new JSSDK(appId, debug, https);
}

export const APPID = new InjectionToken<string>('wechat_mp_app_id');
export const DEBUG = new InjectionToken<string>('wechat_mp_debug');
export const HTTPS = new InjectionToken<string>('wechat_mp_https');


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: []
})
export class JSSDKModule {
  static forRoot(appId: string, debug: boolean = false, https: boolean = true): ModuleWithProviders {
    return {
      ngModule: JSSDKModule,
      providers: [
        { provide: APPID, useValue: appId },
        { provide: DEBUG, useValue: debug },
        { provide: HTTPS, useValue: https },
        { provide: JSSDK, useFactory: JSSDKFactory, deps: [APPID, DEBUG, HTTPS] },
      ]
    };
  }
}
