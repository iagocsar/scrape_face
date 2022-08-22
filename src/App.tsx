import { Menu } from "./components/Menu";
import { Container } from "./components/Container";
import {
  BrowserRouter,
  Link,
  NavLink,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { LogsPage } from "./Pages/LogsPage";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
import { ProductsPage } from "./Pages/ProductsPage";

const PrivateRoute = ({ children, redirectTo }) => {
  const isAuthenticated = true;
  console.log("autenticado", isAuthenticated);

  return isAuthenticated ? children : <Navigate to={redirectTo} />;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/products"
          element={
            <PrivateRoute redirectTo="/">
              <ProductsPage />
            </PrivateRoute>
          }
        />

        <Route
          path="/logs"
          element={
            <PrivateRoute redirectTo="/">
              <LogsPage />
            </PrivateRoute>
          }
        />

        <Route
          path="/home"
          element={
            <PrivateRoute redirectTo="/">
              <Home />
            </PrivateRoute>
          }
        />

        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
