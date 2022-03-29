import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom'
import App from "./App";
import { ContexProvider } from "./contex/contex";
import "slick-carousel/slick/slick.css";
import './index.scss'
import './css/style.loader.scss'
import './firebase'

const app = (
  <ContexProvider>
    <BrowserRouter basename="/wagenda">
      <App />
    </BrowserRouter>
  </ContexProvider>
)
ReactDOM.render(
  app
  ,
  document.getElementById('root')
);