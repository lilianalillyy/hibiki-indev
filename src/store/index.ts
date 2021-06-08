import { createTypedHooks } from "easy-peasy";
import { createStore } from "easy-peasy-decorators";
import { StoreModel, UserModel } from "./models";

// TODO: improve this;
// In order for the UserModel to not be omitted in the final build because it's
// "unused", it needs to be used somewhere at runtime (meaning not as atype). This is the current
// workaround.
UserModel;

const store = createStore<StoreModel>();

export { store };

// typed hooks
export const { useStore, useStoreActions, useStoreDispatch, useStoreState } = createTypedHooks<StoreModel>();

export default store;
