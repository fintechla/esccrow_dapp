import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Transactions } from "./pages/transactions";
import { Transaction } from "./pages/transaction";
import { Modal } from "./components/Modal";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="transactions">
            <Route index element={<Transactions />} />
            <Route path=":transactionId" element={<Transaction />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Modal></Modal>
    </>
  );
}

export default App;
