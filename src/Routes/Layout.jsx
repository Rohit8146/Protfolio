import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/Home";
import NotFound from "../pages/NotFound";
function Layout() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default Layout;
