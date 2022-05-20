// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FleekRouter, Routes, Route } from "./components/fleek-router";
import { Home } from "./pages/home";
import { Transactions } from "./pages/transactions";
import { Transaction } from "./pages/transaction";
import { Modal } from "./components/Modal";

function App() {
  return (
    <>
      <FleekRouter>
        <Routes>
          <Route index page="home" element={<Home />} />
          <Route page="transactions" element={<Transactions />} />
          <Route page="transaction" element={<Transaction />} />
          {/* <Route path="transactions">
            <Route index element={<Transactions />} />
            <Route path=":transactionId" element={<Transaction />} />
          </Route> */}
        </Routes>
      </FleekRouter>
      {/* <BrowserRouter>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="transactions">
            <Route index element={<Transactions />} />
            <Route path=":transactionId" element={<Transaction />} />
          </Route>
        </Routes>
      </BrowserRouter> */}
      <Modal></Modal>
    </>
  );
}

export default App;
