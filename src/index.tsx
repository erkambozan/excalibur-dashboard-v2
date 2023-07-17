import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { configureStoreWith } from "./app/store";
import "rsuite/dist/rsuite.min.css";
import App from "./App";

const store = configureStoreWith();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type ReduxStore = typeof store;