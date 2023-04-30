import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { HashRouter } from "react-router-dom"
import { CartProvider,useCart } from "react-use-cart";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartProvider
        id="jamie"
        onItemAdd={(item) => console.log(`Item ${item.id} added!`)}
        onItemUpdate={(item) => console.log(`Item ${item.id} updated.!`)}
        onItemRemove={() => console.log(`Item removed!`)}
      >
    <HashRouter>
    <App />
    </HashRouter>
    </CartProvider>
  </React.StrictMode>
);

// const mongoose = require('mongoose');
// // local, clean, topics
// // .connect('mongodb://127.0.0.1:27017/cinema', { useNewUrlParser: true })
// mongoose.connect('mongodb://hezron:stonewall-unlocking-racism@136.51.3.69:2222/clean', { useNewUrlParser: true })
//     .catch(e => {
//         console.error('Connection error', e.message)
//     })

// const db = mongoose.connection

// module.exports = db