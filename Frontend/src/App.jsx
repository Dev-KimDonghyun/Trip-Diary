import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogInPage from "./pages/LogInPage.jsx";
import "./styles/index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogInPage />} />
        {/* 
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/list" element={<ListPage/>} />
        <Route path="/trip/new" element={<MakeTripPage />} />
        <Route path="/trip/:id" element={<TripPage />} />
        <Route path="*" element={<NotFound />} />
        */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
