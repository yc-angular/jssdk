import { Injectable, Inject } from '@angular/core';
import { Wechat } from '@yct/jssdk';
import { APPID, DEBUG, HTTPS } from './index';

@Injectable()
export class JSSDK extends Wechat {
  constructor(
    @Inject(APPID) public appId: string,
    @Inject(DEBUG) public debug: boolean,
    @Inject(HTTPS) public https: boolean,
  ) {
    super(appId, debug, https);
  }
}
