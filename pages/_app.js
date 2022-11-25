import "../styles/globals.css";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import user from "../reducers/user";
import signup from "../reducers/signup";
import signin from "../reducers/signin";

const store = configureStore({
  reducer: { user, signup, signin },
});

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
