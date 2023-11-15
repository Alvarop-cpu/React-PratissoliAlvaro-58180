//1.Importamos librerias react y reactDOM

import React from "react";
//La libreria que define que es un componente y como funcionan junto

import ReactDom from "react-dom/client";
//Esta sabe como hacer que un componente aparezca en pantalla del usuario
import App from "./App";

//2.Obetener referencia al div con id root
const element = document.getElementById("root");

//3.Decimos a react que tome control sobre el elemento
const root = ReactDom.createRoot(element);

root.render(<App/>);