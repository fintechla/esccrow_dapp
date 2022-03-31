import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Modal } from "./components/Modal";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Modal></Modal>
    </>
  );
}

export default App;
