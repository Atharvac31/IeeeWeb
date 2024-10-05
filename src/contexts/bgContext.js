import { createContext } from "react";

const bgContext = createContext({
  isLightTheme: null,
  setisLightTheme: (isLightTheme) => {},
});
export default bgContext;
