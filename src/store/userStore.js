import { observable, action } from 'mobx';
import * as server from '../server';

class UserStore {
  @observable user = { name: 'm' }

  @action async fetchUser() {
    try {
      const user = await server.getUser();
      this.user = user;
    } catch (e) {
      console.log(e);
    }
  }
}

export default new UserStore();

// export default observable({
//   user: {
//     name: 'm',
//   },
//   async fetchUser() {
//     try {
//       const user = await server.getUser();
//       this.user = user;
//     } catch (e) {
//       console.log(e);
//     }
//   },
// }, {
//   user: observable,
//   fetchUser: action,
// });
