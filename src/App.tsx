import { createContext, useState } from "react";
import Content from "./components/Content";
import Dashboard from "./components/dashboard";
import './styles/theme.css';
import './styles/app.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Error from "./components/Error";

export const AppContext = createContext<any>(null);

function App() {

  const [theme, setTheme] = useState("light");
  const [chatHistory, setchatHistory] = useState<any[]>([]);

  return (

    <AppContext.Provider value={{ theme, setTheme, chatHistory, setchatHistory }}>
      <BrowserRouter>
        <div className="container-fluid text-center border border-primary" data-bs-theme={theme}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/content" element={<Content />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/Error" element={<Error />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
