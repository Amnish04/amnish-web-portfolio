import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <main className="font-mont bg-light min-h-screen">
            <App />
        </main>
    </React.StrictMode>
);
