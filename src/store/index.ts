import { createContext, useContext } from "react";
import { ElementStore } from "./ElementStore";

const TOTAL_ELEMENTS = 300; 
const elementStore = new ElementStore(TOTAL_ELEMENTS)

export const rootStoreContext = createContext({
  elementStore: elementStore,
});

export const useStores = () => useContext(rootStoreContext);