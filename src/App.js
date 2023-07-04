import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header.jsx/Header";

import Users from "./pages/users/Users";
import BankSystem from "./pages/bankSystem/BankSystem";

function App() {
  return (
    <div className="App">
    
        <Header />
        <Routes>
          <Route path="/users" element={<Users />} />
          <Route path="/bank" element={<BankSystem />} />
        </Routes>
      
    </div>
  );
}

export default App;
