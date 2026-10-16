import React, { useState } from 'react';
import { Volume2, VolumeX, Menu, X, User } from 'lucide-react';
import { sounds } from '../utils/audio';

interface NavbarProps {
  onStartQuiz: (mode?: string) => void;
  onOpenEncyclopedia: () => void;
  onOpenLeaderboard: () => void;
  onOpenBlog: () => void;
  onOpenAuth: () => void;
  onOpenMemeSuggest: () => void;
  onStartDuel: () => void;
  activeSection?: string;
  user: { name: string; avatar: string; score: number } | null;
}

export const Navbar: React.FC<NavbarProps> = ({
  onStartQuiz,
  onOpenEncyclopedia,
  onOpenLeaderboard,
  onOpenBlog,
  onOpenAuth,
  onStartDuel,
  user
}) => {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleSound = () => {
    sounds.enabled = !soundEnabled;
    setSoundEnabled(!soundEnabled);
    if (!soundEnabled) {
      sounds.playClick();
    }
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-[#121123]/85 backdrop-blur-xl border-b border-white/5 shadow-[0_1px_8px_rgba(0,0,0,0.2)]">
      <div className="h-20 w-full max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <div className="flex items-center gap-6">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <img
              src="https://lh3.googleusercontent.com/aida/AEtjO1XG_pKST0Cu9kdbEhdG4WGFtwvFw5GsmBXFuLAs363XvNwXf_lNuy9HV1HeV64Mn34y9n0DfUslaZBgt2gRsSKpFNKrK3xt0JPrx9ZiVO8Or1LhCcw8u4hlQjVRrDcf3K1Q_EXGVvMkrOvv3On_a2ALB8frbtMxtuN3hrwsdthnJawVtjECtK6FeEyCVe1zvRYSPCKp8Z3tEpM1-Ohh5X_Z9gMf5qKjeNJ0seQAaq51z8eEwD-x0p0Jig"
              alt="Meme Yarışması Logo"
              className="h-9 w-9 object-contain drop-shadow-[0_0_12px_rgba(247,81,161,0.4)] group-hover:scale-105 transition-transform"
            />
            <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-[#f8fafc] group-hover:text-[#ffb0cd] transition-colors">
              Meme Yarışması
            </span>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden xl:flex items-center gap-1">
            <button
              onClick={() => onStartQuiz('classic')}
              className="px-3 py-1.5 text-sm font-semibold text-[#94a3b8] hover:text-[#f8fafc] hover:bg-[#1f1e2f] transition-all rounded-lg"
            >
              Yarışma
            </button>
            <button
              onClick={onStartDuel}
              className="px-3 py-1.5 text-sm font-semibold text-[#94a3b8] hover:text-[#4cd7f6] hover:bg-[#1f1e2f] transition-all rounded-lg flex items-center gap-1.5"
            >
              <span className="text-xs bg-[#4cd7f6]/20 text-[#4cd7f6] px-1.5 py-0.5 rounded font-bold">1v1</span>
              Düello
            </button>
            <button
              onClick={() => onStartQuiz('daily')}
              className="px-3 py-1.5 text-sm font-semibold text-[#94a3b8] hover:text-[#f8fafc] hover:bg-[#1f1e2f] transition-all rounded-lg"
            >
              Günlük Mücadele
            </button>
            <button
              onClick={() => scrollToSection('ansiklopedi-bolumu')}
              className="px-3 py-1.5 text-sm font-semibold text-[#94a3b8] hover:text-[#f8fafc] hover:bg-[#1f1e2f] transition-all rounded-lg"
            >
              Ansiklopedi
            </button>
            <button
              onClick={() => scrollToSection('liderlik-bolumu')}
              className="px-3 py-1.5 text-sm font-semibold text-[#94a3b8] hover:text-[#f8fafc] hover:bg-[#1f1e2f] transition-all rounded-lg"
            >
              Liderlik Tablosu
            </button>
            <button
              onClick={() => scrollToSection('blog-bolumu')}
              className="px-3 py-1.5 text-sm font-semibold text-[#94a3b8] hover:text-[#f8fafc] hover:bg-[#1f1e2f] transition-all rounded-lg"
            >
              Blog
            </button>
          </nav>
        </div>

        {/* Right Action Icons & Live Players */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Live Online Badge */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-[#1b1a2b] border border-white/5 shadow-[0_0_12px_rgba(16,185,129,0.15)]">
            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></span>
            <span className="text-xs font-bold text-[#e4e0f8] uppercase tracking-wider">
              1.428 Canlı Oyuncu
            </span>
          </div>

          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            title={soundEnabled ? 'Sesi Kapat' : 'Sesi Aç'}
            className="p-2 rounded-xl bg-[#141226] text-[#94a3b8] hover:text-white hover:bg-[#1f1e2f] transition-all border border-white/5"
          >
            {soundEnabled ? <Volume2 size={18} className="text-[#4cd7f6]" /> : <VolumeX size={18} />}
          </button>

          {/* User Auth / Profile */}
          {user ? (
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#141226] border border-white/10">
              <div className="w-7 h-7 rounded-full bg-[#f751a1] text-white flex items-center justify-center text-xs font-bold">
                {user.name.slice(0, 2).toUpperCase()}
              </div>
              <span className="text-sm font-semibold text-white hidden sm:inline">{user.name}</span>
            </div>
          ) : (
            <button
              onClick={onOpenAuth}
              className="hidden sm:inline-block px-3.5 py-1.5 text-sm font-semibold text-[#94a3b8] hover:text-white hover:bg-[#1f1e2f] transition-colors rounded-xl"
            >
              Giriş Yap
            </button>
          )}

          {/* Primary CTA Play Button */}
          <button
            onClick={() => onStartQuiz('classic')}
            className="px-4 py-2 text-sm sm:text-base font-bold text-white bg-gradient-to-r from-[#f751a1] to-[#b4136d] hover:brightness-110 active:scale-95 transition-all rounded-xl shadow-[0_0_20px_rgba(247,81,161,0.45)] flex items-center gap-1.5"
          >
            <span className="material-symbols-outlined text-[18px]">play_arrow</span>
            <span>Hemen Oyna</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-xl bg-[#141226] text-[#94a3b8] hover:text-white"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#121123]/98 border-b border-white/10 px-6 py-4 flex flex-col gap-3 backdrop-blur-xl animate-in slide-in-from-top duration-200">
          <div className="flex items-center justify-between pb-2 border-b border-white/5">
            <span className="flex items-center gap-2 text-xs text-[#10b981] font-bold">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></span>
              1.428 Canlı Oyuncu Devrede
            </span>
            <button
              onClick={onOpenAuth}
              className="text-xs font-bold text-[#ffb0cd] flex items-center gap-1"
            >
              <User size={14} /> Giriş Yap
            </button>
          </div>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onStartQuiz('classic');
            }}
            className="text-left py-2 font-bold text-white hover:text-[#f751a1]"
          >
            🎮 Yarışma (Klasik Mod)
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onStartDuel();
            }}
            className="text-left py-2 font-bold text-[#4cd7f6] hover:brightness-125"
          >
            ⚔️ 1v1 Canlı Düello
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onStartQuiz('speed');
            }}
            className="text-left py-2 font-bold text-[#ffb95f]"
          >
            ⚡ Hız Modu (10 Saniye)
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onStartQuiz('daily');
            }}
            className="text-left py-2 font-bold text-white hover:text-[#f751a1]"
          >
            📅 Günlük Mücadele (10 Soru)
          </button>
          <button
            onClick={() => scrollToSection('ansiklopedi-bolumu')}
            className="text-left py-2 font-semibold text-[#94a3b8] hover:text-white"
          >
            📖 Meme Ansiklopedisi
          </button>
          <button
            onClick={() => scrollToSection('liderlik-bolumu')}
            className="text-left py-2 font-semibold text-[#94a3b8] hover:text-white"
          >
            🏆 Liderlik Tablosu
          </button>
          <button
            onClick={() => scrollToSection('blog-bolumu')}
            className="text-left py-2 font-semibold text-[#94a3b8] hover:text-white"
          >
            📰 Blog & Analiz
          </button>
        </div>
      )}
    </header>
  );
};
