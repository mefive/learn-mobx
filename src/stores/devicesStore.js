import { observable, action } from 'mobx';
import * as server from '../server';
import commonStore from './commonStore';

class DevicesStore {
  @observable devices = [];

  @action async fetchDevices() {
    try {
      commonStore.startFetching();
      this.devices = await server.getDevices();
      commonStore.finishFetching();
    } catch (e) {
      console.log(e);
    }
  }
}

export default new DevicesStore();
