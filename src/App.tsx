import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { QuickNavTiles } from './components/QuickNavTiles';
import { GameModesSection } from './components/GameModesSection';
import { DailyChallengeAndLeaderboard } from './components/DailyChallengeAndLeaderboard';
import { HowToPlaySection } from './components/HowToPlaySection';
import { EncyclopediaSection } from './components/EncyclopediaSection';
import { FaqSection } from './components/FaqSection';
import { BlogSection } from './components/BlogSection';
import { CallToActionBanner } from './components/CallToActionBanner';
import { Footer } from './components/Footer';
import { QuizGameScreen } from './components/QuizGameScreen';
import { DuelScreen } from './components/DuelScreen';
import { MemeSuggestModal } from './components/MemeSuggestModal';
import { AuthModal } from './components/AuthModal';

export default function App() {
  const [activeQuizMode, setActiveQuizMode] = useState<'classic' | 'speed' | 'hardcore' | 'endless' | 'daily' | null>(null);
  const [initialMemeTitle, setInitialMemeTitle] = useState<string | undefined>(undefined);
  const [isDuelOpen, setIsDuelOpen] = useState(false);
  const [isSuggestOpen, setIsSuggestOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const [user, setUser] = useState<{ name: string; avatar: string; score: number } | null>(() => {
    try {
      const stored = localStorage.getItem('meme_user');
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  const handleStartQuiz = (mode: string = 'classic') => {
    setInitialMemeTitle(undefined);
    if (mode === 'duel') {
      setIsDuelOpen(true);
    } else {
      setActiveQuizMode(mode as 'classic' | 'speed' | 'hardcore' | 'endless' | 'daily');
    }
  };

  const handlePlaySpecificMeme = (memeTitle: string) => {
    setInitialMemeTitle(memeTitle);
    setActiveQuizMode('classic');
  };

  const handleLoginSuccess = (name: string) => {
    const newUser = { name, avatar: '', score: 320 };
    setUser(newUser);
    try {
      localStorage.setItem('meme_user', JSON.stringify(newUser));
    } catch {
      // ignore
    }
  };

  const handleUpdateUserScore = (earnedPoints: number) => {
    if (user) {
      const updated = { ...user, score: user.score + earnedPoints };
      setUser(updated);
      try {
        localStorage.setItem('meme_user', JSON.stringify(updated));
      } catch {
        // ignore
      }
    }
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#121123] text-[#e4e0f8] min-h-screen flex flex-col justify-between selection:bg-[#f751a1] selection:text-white">
      {/* Fixed Sticky Header Navigation */}
      <Navbar
        onStartQuiz={handleStartQuiz}
        onOpenEncyclopedia={() => scrollTo('ansiklopedi-bolumu')}
        onOpenLeaderboard={() => scrollTo('liderlik-bolumu')}
        onOpenBlog={() => scrollTo('blog-bolumu')}
        onOpenAuth={() => setIsAuthOpen(true)}
        onOpenMemeSuggest={() => setIsSuggestOpen(true)}
        onStartDuel={() => setIsDuelOpen(true)}
        user={user}
      />

      {/* Main Page Layout */}
      <main className="w-full bg-[#121123] flex-1">
        {/* Hero Section with Interactive Live Card */}
        <HeroSection
          onStartQuiz={handleStartQuiz}
          onStartDuel={() => setIsDuelOpen(true)}
        />

        {/* Quick Navigation 6 Tiles */}
        <QuickNavTiles
          onStartDaily={() => handleStartQuiz('daily')}
          onOpenCreate={() => setIsSuggestOpen(true)}
          onOpenEncyclopedia={() => scrollTo('ansiklopedi-bolumu')}
          onOpenSuggest={() => setIsSuggestOpen(true)}
          onOpenLeaderboard={() => scrollTo('liderlik-bolumu')}
          onOpenBlog={() => scrollTo('blog-bolumu')}
        />

        {/* Game Modes Bento Grid */}
        <GameModesSection
          onSelectMode={(mode) => {
            if (mode === 'duel') setIsDuelOpen(true);
            else if (mode === 'group') setIsDuelOpen(true);
            else handleStartQuiz(mode);
          }}
        />

        {/* Günlük Meydan Okuma & Skor Tablosu */}
        <DailyChallengeAndLeaderboard
          onStartDaily={() => handleStartQuiz('daily')}
          onStartDuel={() => setIsDuelOpen(true)}
          onOpenAuth={() => setIsAuthOpen(true)}
        />

        {/* Nasıl Oynanır? (3 Simple Steps) */}
        <HowToPlaySection />

        {/* Meme Ansiklopedisi: Kült Replikler */}
        <EncyclopediaSection
          onPlayMemeQuiz={handlePlaySpecificMeme}
        />

        {/* Sıkça Sorulan Sorular Accordion */}
        <FaqSection />

        {/* Blog & Kültür Analizleri */}
        <BlogSection />

        {/* Final CTA Banner */}
        <CallToActionBanner
          onStartQuiz={() => handleStartQuiz('classic')}
          onInviteFriend={() => setIsDuelOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        onStartQuiz={() => handleStartQuiz('classic')}
        onStartDuel={() => setIsDuelOpen(true)}
        onOpenEncyclopedia={() => scrollTo('ansiklopedi-bolumu')}
        onOpenSuggest={() => setIsSuggestOpen(true)}
      />

      {/* Active Quiz Fullscreen Game Engine */}
      {activeQuizMode && (
        <QuizGameScreen
          mode={activeQuizMode}
          initialMemeTitle={initialMemeTitle}
          onClose={() => setActiveQuizMode(null)}
          onUpdateUserScore={handleUpdateUserScore}
        />
      )}

      {/* 1v1 Multiplayer Live Duel Modal / Screen */}
      {isDuelOpen && (
        <DuelScreen
          onClose={() => setIsDuelOpen(false)}
          user={user}
        />
      )}

      {/* Community Meme Suggest Modal */}
      {isSuggestOpen && (
        <MemeSuggestModal
          onClose={() => setIsSuggestOpen(false)}
        />
      )}

      {/* Login & Registration Modal */}
      {isAuthOpen && (
        <AuthModal
          onClose={() => setIsAuthOpen(false)}
          onLoginSuccess={handleLoginSuccess}
        />
      )}
    </div>
  );
}
