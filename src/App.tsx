import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { supabase } from './lib/supabase';
import { AuthForm } from './components/AuthForm';
import { PasswordList } from './components/PasswordList';
import { AddPasswordForm } from './components/AddPasswordForm';
import { LogOut, Shield } from 'lucide-react';
import LandingPage from './components/LandingPage.tsx';

function App() {
  const [session, setSession] = useState(null);
  const [masterKey, setMasterKey] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setMasterKey('');
    setIsAuthenticated(false);
  };

  const handleMasterKeySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (masterKey.length >= 8) {
      setIsAuthenticated(true);
    }
  };

  return (
    <Router>
      <Routes>
        {/* Redirige la raíz a /landing */}
        <Route path="/" element={<Navigate to="/landing" />} />
        <Route path="/landing" element={<LandingPage />} />

        {/* Rutas protegidas después de autenticación */}
        <Route
          path="/app"
          element={
            !session ? (
              <AuthForm onSuccess={() => {}} />
            ) : !isAuthenticated ? (
              <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
                  <div>
                    <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-600">
                      <Shield className="h-8 w-8 text-white" />
                    </div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                      Enter Master Key
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                      This key will be used to encrypt and decrypt your passwords
                    </p>
                  </div>
                  <form className="mt-8 space-y-6" onSubmit={handleMasterKeySubmit}>
                    <div className="rounded-md shadow-sm">
                      <input
                        type="password"
                        required
                        className="appearance-none relative block w-full px-3 py-3 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        placeholder="Enter your master key (min 8 characters)"
                        value={masterKey}
                        onChange={(e) => setMasterKey(e.target.value)}
                        minLength={8}
                      />
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-150"
                      >
                        Continue
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            ) : (
              <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
                <nav className="bg-white shadow-sm border-b border-gray-200">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                      <div className="flex items-center">
                        <Shield className="h-8 w-8 text-indigo-600" />
                        <span className="ml-2 text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                          SecureVault
                        </span>
                      </div>
                      <div className="flex items-center">
                        <button
                          onClick={handleSignOut}
                          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-600 bg-indigo-50 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-150"
                        >
                          <LogOut className="h-4 w-4 mr-2" />
                          Sign Out
                        </button>
                      </div>
                    </div>
                  </div>
                </nav>

                <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                  <PasswordList masterKey={masterKey} />
                  <AddPasswordForm
                    masterKey={masterKey}
                    onSuccess={() => window.location.reload()}
                  />
                </main>
              </div>
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
