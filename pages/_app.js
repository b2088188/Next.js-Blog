import "../styles/globals.css";
import Layout from "../components/layout";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from "../reducers";
import { Provider } from "react-redux";
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer);

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
