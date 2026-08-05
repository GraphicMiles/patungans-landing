import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import AuthBox from '../components/AuthBox.jsx';

/** /login and /signup — the auth box centered on screen. */
export default function AuthPage({ mode }) {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <main className="flex min-h-[calc(100dvh-4rem)] items-center justify-center px-4 py-12">
        <AuthBox
          mode={mode}
          onSwitch={(tab) => navigate(tab === 'login' ? '/login' : '/signup')}
          onClose={() => navigate('/')}
        />
      </main>
    </>
  );
}
