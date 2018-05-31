import { Injectable, Inject } from '@angular/core';
import { Wechat } from '@yct/jssdk';
import { APPID, DEBUG } from './index';

@Injectable()
export class JSSDK extends Wechat {
  constructor(
    @Inject(APPID) public appId: string,
    @Inject(APPID) public debug: boolean,
  ) {
    super(appId, debug);
  }
}
