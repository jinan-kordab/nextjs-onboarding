import { Provider } from "react-redux";
import store from "../store/index";
import { Roboto } from "@next/font/google";
import "../styles/global.css";
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <main className={roboto.className}>
        <Component {...pageProps} />
      </main>
    </Provider>
  );
}
