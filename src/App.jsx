import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import { Header } from "./components/Header/Header";
import { MainPage } from "./pages/MainPage";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/main" Component={MainPage} />
          <Route path="*" element={<Navigate to="/main" />}  />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
