import React from "react";
import ReactDOMClient from "react-dom/client";
import { Index } from "./screens/Index";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Index />);
