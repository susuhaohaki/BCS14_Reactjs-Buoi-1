import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import BaiTapThucHanhLayout from "./BaiTapThucHanhLayout.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BaiTapThucHanhLayout />
  </StrictMode>
);
