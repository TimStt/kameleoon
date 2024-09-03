import ReactDOM from 'react-dom/client'
import {Provider} from "react-redux";
import store from "@app/store/store.ts";
import {BrowserRouter} from "react-router-dom";
import './index.scss';
import "./_reset.css";
import WebFont from "webfontloader";
import {AppRouter} from "@app/app-router";

WebFont.load({
  google: {
    families: ["Inter:300,400,500,600,700,800", "sans-serif"]
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <main>
        <AppRouter/>
      </main>
    </BrowserRouter>
  </Provider>,
)