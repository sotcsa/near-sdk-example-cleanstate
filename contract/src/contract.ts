import { NearBindgen, NearContract, near, call, view } from "near-sdk-js";

@NearBindgen
class CleanState extends NearContract {
  @call
  clear({ keys }) {
    near.log(`Clear ${keys}`);
    keys.forEach(key => {
      near.storageWrite(key, null);
    });
  }


  @call
  set({ key, value }) {
    near.log(`Set ${key} = ${value}`);
    near.storageWrite(key, value);
  }

  @view
  get({ key }): string {
    near.log(`Get key ${key}`);
    return near.storageRead(key);
  }

  default() {
    return new CleanState();
  }
}
