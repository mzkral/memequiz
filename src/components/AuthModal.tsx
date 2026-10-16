import React, { useState } from 'react';
import { X, User, Lock, Mail } from 'lucide-react';

interface AuthModalProps {
  onClose: () => void;
  onLoginSuccess: (name: string) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ onClose, onLoginSuccess }) => {
  const [isRegister, setIsRegister] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim()) return;
    onLoginSuccess(username);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150">
      <div className="bg-[#141226] border border-white/10 rounded-3xl p-6 sm:p-8 max-w-sm w-full shadow-2xl relative text-left">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-[#1f1e2f] text-[#94a3b8] hover:text-white transition-all cursor-pointer"
        >
          <X size={18} />
        </button>

        <div className="flex flex-col gap-1 mb-5">
          <h3 className="text-2xl font-black text-white">
            {isRegister ? 'Hesap Oluştur' : 'Giriş Yap'}
          </h3>
          <p className="text-xs text-[#94a3b8]">
            Lider tablosunda kalıcı yer almak ve 1v1 istatistiklerini kaydetmek için giriş yap.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
          <div className="flex flex-col gap-1">
            <label className="text-[11px] font-bold text-white uppercase tracking-wider">
              Kullanıcı Adı (Yarışmacı Adı)
            </label>
            <div className="relative flex items-center">
              <User size={16} className="absolute left-3 text-[#64748b]" />
              <input
                type="text"
                required
                placeholder="Örn: MemeLord34"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-[#1f1e2f] border border-white/10 text-white text-sm focus:outline-none focus:border-[#f751a1] transition-colors"
              />
            </div>
          </div>

          {isRegister && (
            <div className="flex flex-col gap-1">
              <label className="text-[11px] font-bold text-white uppercase tracking-wider">
                E-posta Adresi
              </label>
              <div className="relative flex items-center">
                <Mail size={16} className="absolute left-3 text-[#64748b]" />
                <input
                  type="email"
                  placeholder="ornek@posta.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-[#1f1e2f] border border-white/10 text-white text-sm focus:outline-none focus:border-[#f751a1] transition-colors"
                />
              </div>
            </div>
          )}

          <div className="flex flex-col gap-1">
            <label className="text-[11px] font-bold text-white uppercase tracking-wider">
              Şifre
            </label>
            <div className="relative flex items-center">
              <Lock size={16} className="absolute left-3 text-[#64748b]" />
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-[#1f1e2f] border border-white/10 text-white text-sm focus:outline-none focus:border-[#f751a1] transition-colors"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-2 w-full py-3 rounded-xl bg-gradient-to-r from-[#f751a1] to-[#b4136d] text-white font-black text-sm shadow-[0_0_20px_rgba(247,81,161,0.4)] hover:brightness-110 active:scale-95 transition-all cursor-pointer"
          >
            {isRegister ? 'Ücretsiz Kaydol' : 'Giriş Yap'}
          </button>
        </form>

        <div className="pt-4 mt-2 border-t border-white/5 text-center text-xs text-[#94a3b8]">
          {isRegister ? 'Zaten hesabın var mı? ' : 'Hesabın yok mu? '}
          <button
            type="button"
            onClick={() => setIsRegister(!isRegister)}
            className="text-[#f751a1] font-bold hover:underline cursor-pointer"
          >
            {isRegister ? 'Giriş Yap' : 'Kayıt Ol'}
          </button>
        </div>
      </div>
    </div>
  );
};
