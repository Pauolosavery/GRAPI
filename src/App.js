import style from "./styles.module.css";
import NavBar from "./components/1.NavBar/NavBar";
import Chat from "./components/2.Chat/Chat";

import { Provider } from "react-redux";
import { store } from "./store/index";
import { CurrentUserProvider } from "./context/current-user-context";

export default function App() {
  return (
    <CurrentUserProvider>
      <Provider store={store}>
        <div className={style.App}>
          <NavBar />
          <Chat />
        </div>
      </Provider>
    </CurrentUserProvider>
  );
}
