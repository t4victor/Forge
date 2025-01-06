import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { decryptPassword } from '../lib/encryption';
import { Eye, EyeOff, Copy, ExternalLink, Check, Key } from 'lucide-react';

interface Password {
  id: string;
  title: string;
  username: string;
  encrypted_password: string;
  url?: string;
  notes?: string;
}

interface PasswordListProps {
  masterKey: string;
}

export function PasswordList({ masterKey }: PasswordListProps) {
  const [passwords, setPasswords] = useState<Password[]>([]);
  const [visiblePasswords, setVisiblePasswords] = useState<Set<string>>(new Set());
  const [copiedStates, setCopiedStates] = useState<Set<string>>(new Set());

  useEffect(() => {
    loadPasswords();
  }, []);

  const loadPasswords = async () => {
    const { data, error } = await supabase
      .from('passwords')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error loading passwords:', error);
      return;
    }

    setPasswords(data || []);
  };

  const togglePasswordVisibility = (id: string) => {
    setVisiblePasswords(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedStates(prev => new Set([...prev, id]));
      setTimeout(() => {
        setCopiedStates(prev => {
          const next = new Set(prev);
          next.delete(id);
          return next;
        });
      }, 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  if (passwords.length === 0) {
    return (
      <div className="text-center py-12">
        <Key className="mx-auto h-12 w-12 text-gray-400" />
        <h3 className="mt-2 text-sm font-medium text-gray-900">No passwords</h3>
        <p className="mt-1 text-sm text-gray-500">Get started by adding a new password.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {passwords.map((password) => (
          <div key={password.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-4 hover:shadow-md transition-shadow duration-200">
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-semibold text-gray-900">{password.title}</h3>
              {password.url && (
                <a
                  href={password.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors duration-150"
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
              )}
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center group">
                <span className="text-sm text-gray-600">Username</span>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium">{password.username}</span>
                  <button
                    onClick={() => copyToClipboard(password.username, `username-${password.id}`)}
                    className="text-gray-400 hover:text-gray-600 transition-colors duration-150"
                  >
                    {copiedStates.has(`username-${password.id}`) ? (
                      <Check className="h-4 w-4 text-green-500" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex justify-between items-center group">
                <span className="text-sm text-gray-600">Password</span>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium font-mono">
                    {visiblePasswords.has(password.id)
                      ? decryptPassword(password.encrypted_password, masterKey)
                      : '••••••••'}
                  </span>
                  <button
                    onClick={() => togglePasswordVisibility(password.id)}
                    className="text-gray-400 hover:text-gray-600 transition-colors duration-150"
                  >
                    {visiblePasswords.has(password.id) ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                  <button
                    onClick={() => copyToClipboard(decryptPassword(password.encrypted_password, masterKey), `password-${password.id}`)}
                    className="text-gray-400 hover:text-gray-600 transition-colors duration-150"
                  >
                    {copiedStates.has(`password-${password.id}`) ? (
                      <Check className="h-4 w-4 text-green-500" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              {password.notes && (
                <div className="pt-2 border-t border-gray-100">
                  <span className="text-sm text-gray-600 block mb-1">Notes</span>
                  <p className="text-sm text-gray-700">{password.notes}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}