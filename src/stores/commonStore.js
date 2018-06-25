import { observable, action } from 'mobx';

class CommonStore {
  @observable isFetching = false;

  @action startFetching() {
    this.isFetching = true;
  }

  @action finishFetching() {
    this.isFetching = false;
  }
}

export default new CommonStore();
