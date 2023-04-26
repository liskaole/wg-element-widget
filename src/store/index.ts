import { createContext, useContext } from "react";
import { ElementStore } from "./ElementStore";

const elementStore = new ElementStore()

export const rootStoreContext = createContext({
  elementStore: elementStore,
});

export const useStores = () => useContext(rootStoreContext);