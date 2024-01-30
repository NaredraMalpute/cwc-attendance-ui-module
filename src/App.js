import { BrowserRouter, Switch } from "react-router-dom";
import { ConfigProvider, Typography } from "antd";
import Routes from "../src/routes/index";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  const history = createBrowserHistory();

  return (
    <div className="App">
      <Provider store={store}>
        <ConfigProvider
          theme={{
            token: {
              fontFamily: "poppins",
            },
          }}
        >
          <BrowserRouter history={history}>
            <Switch>
              <Routes />
            </Switch>
          </BrowserRouter>
        </ConfigProvider>
      </Provider>
    </div>
  );
}

export default App;
