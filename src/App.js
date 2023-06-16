import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { AuthContextProvider } from "./components/context/AuthContext";
import Footer from "./components/Footer";

function App() {
  return (
    <AuthContextProvider>
      <Header />
      <Outlet />
      <Footer />
    </AuthContextProvider>
  );
}

export default App;
