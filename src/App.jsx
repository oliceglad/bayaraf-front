import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import { Header } from "./components/Header/Header";
import { MainPage } from "./pages/MainPage";
import { ItemsPage } from "./pages/ItemsPage";
import { FilterPage } from "./pages/FilterPage";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/main" Component={MainPage} />
          <Route path="/items" Component={ItemsPage} />
          <Route path="/filters" Component={FilterPage} />
          <Route path="*" element={<Navigate to="/main" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
