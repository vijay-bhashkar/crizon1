import axios from "axios";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
// import "./assets/scss/main.css";
import { persistor, Store } from "./redux/store";
import RootRouter from "./routes/RootRouter";
import { toastSuccess } from "./utils/toastUtils";
export const axiosApiInstance = axios.create();
function App() {
  // onMessageListener()
  //   .then((payload) => {
  //     // setNotification({title: payload.notification.title, body: payload.notification.body})
  //     // setShow(true);
  //     // console.log(payload);
  //     // console.log("Received background message ", payload);

  //     // const notificationTitle = payload.notification.title;
  //     // const notificationOptions = {
  //     //   body: payload.notification.body,
  //     // };
  //     toastSuccess(payload.data.description);
  //   })
  //   .catch((err) => console.log("failed: ", err));
  return (
    <Provider store={Store}>
      <PersistGate loading={<h1>Loading...</h1>} persistor={persistor}>
        <RootRouter />
        <Toaster />
      </PersistGate>
    </Provider>
  );
}

export default App;
