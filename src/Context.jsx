import { createContext } from "preact";

let doc;
let win;
if (typeof document !== "undefined") {
  doc = document;
}
if (typeof window !== "undefined") {
  win = window;
}

export const FrameContext = createContext({
  document: doc,
  window: win
});

export const {
  Provider: FrameContextProvider,
  Consumer: FrameContextConsumer
} = FrameContext;
