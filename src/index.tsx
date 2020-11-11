import React from "react";
import "./defaultStyle.css";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
console.log("Bem vindo ao Martins!");
console.log = () => {};
console.error = () => {};
console.warn = () => {};
window.addEventListener(
  "message",
  function receiveMessage(event: any) {
    var window_data = {
      window_height: document.body.scrollHeight,
    };

    event.source.postMessage(window_data, event.origin);
  },
  false
);

setInterval(function() {
  var wrapperHeight:any =  document.getElementsByClassName("website-wrapper")[0]
  if(wrapperHeight)
    wrapperHeight = wrapperHeight.offsetHeight + 30;

  var data = {
    height: wrapperHeight,
    origin: "https://parceiro.martins.com.br",
  };

  window.parent.postMessage(data, "*");
}, 500);
ReactDOM.render(<App />, document.getElementById("root"));
