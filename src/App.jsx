import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage.jsx';
import AuthPage from './pages/AuthPage.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-mist font-sans text-ink">
        <Routes>
          <Route path="/login" element={<AuthPage mode="login" />} />
          <Route path="/signup" element={<AuthPage mode="signup" />} />
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
