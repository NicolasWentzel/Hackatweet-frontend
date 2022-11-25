import "../styles/globals.css";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import user from "../reducers/user";
import signup from "../reducers/signup";
import signin from "../reducers/signin";
import tweet from "../reducers/tweet";
import trends from "../reducers/trends";
import lasttweet from "../reducers/lasttweet";

const store = configureStore({
  reducer: { user, signup, signin, tweet, trends, lasttweet },
});

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
