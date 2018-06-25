import { observable, action } from 'mobx';
import * as server from '../server';
import commonStore from './commonStore';

class UserStore {
  @observable user = { name: 'm' };

  @action async fetchUser() {
    try {
      commonStore.startFetching();
      this.user = await server.getUser();
      commonStore.finishFetching();
    } catch (e) {
      console.log(e);
    }
  }
}

export default new UserStore();
