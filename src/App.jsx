import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import { Header } from "./components/Header/Header";
import { MainPage } from "./pages/MainPage";
import { ItemsPage } from "./pages/ItemsPage";
import { FilterPage } from "./pages/FilterPage";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "./redux/themeAction";
import { TenderPage } from "./pages/TenderPage";
import { CatalogPage } from "./pages/CatalogPage";

function App() {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
    document.body.className = theme.theme;
  };
  return (
    <>
      <BrowserRouter>
        <Header theme={theme} handleThemeToggle={handleThemeToggle} />
        <Routes>
          <Route path="/main" element={<MainPage theme={theme} />} />
          <Route path="/items" element={<ItemsPage theme={theme} />} />
          <Route path="/filters" element={<FilterPage theme={theme} />} />
          <Route path="/tenders" element={<TenderPage theme={theme} />} />
          <Route path="/catalog" element={<CatalogPage theme={theme} />} />
          <Route path="*" element={<Navigate to="/main" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
