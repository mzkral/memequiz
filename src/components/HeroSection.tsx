import React, { useState, useEffect } from 'react';
import { sounds } from '../utils/audio';

interface HeroSectionProps {
  onStartQuiz: (mode?: string) => void;
  onStartDuel: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onStartQuiz, onStartDuel }) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [fiftyFiftyUsed, setFiftyFiftyUsed] = useState(false);
  const [timerCount, setTimerCount] = useState(8);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimerCount((prev) => (prev > 1 ? prev - 1 : 12));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleHeroOptionClick = (index: number) => {
    setSelectedOption(index);
    setIsAnswered(true);
    if (index === 1) {
      sounds.playCorrect();
    } else {
      sounds.playWrong();
    }
  };

  const handleFiftyFifty = () => {
    if (!fiftyFiftyUsed) {
      setFiftyFiftyUsed(true);
      sounds.playJoker();
    }
  };

  return (
    <section className="relative w-full overflow-hidden px-4 sm:px-6 pt-28 pb-16 lg:py-24">
      {/* Ambient Neon Radiance Background Glow */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-96 h-96 rounded-full bg-[#f751a1]/15 blur-3xl"></div>
      <div className="pointer-events-none absolute top-1/2 -right-40 w-96 h-96 rounded-full bg-[#4cd7f6]/15 blur-3xl"></div>
      <div className="pointer-events-none absolute bottom-0 left-1/3 w-80 h-80 rounded-full bg-[#a855f7]/15 blur-3xl"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column: Hero Content & CTAs */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-left">
          {/* Status Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#141226] border border-white/10 shadow-lg self-start">
            <span className="w-2.5 h-2.5 rounded-full bg-[#10b981] animate-pulse"></span>
            <span className="text-xs font-black uppercase tracking-widest text-[#10b981]">
              ONLINE YARIŞMA BAŞLADI
            </span>
            <span className="text-[#64748b] text-xs">· 1.428 yarışmacı devrede</span>
          </div>

          {/* Hero Headline */}
          <h1 className="text-4xl sm:text-6xl xl:text-7xl uppercase tracking-tighter text-[#f8fafc] leading-tight font-black">
            MEME LORD <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#f751a1] via-[#ffb0cd] to-[#4cd7f6] bg-clip-text text-transparent">
              OLMAYA HAZIR
            </span>{' '}
            MISIN?
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-[#94a3b8] max-w-xl leading-relaxed">
            Türk internet memeleri üzerine <strong className="text-white font-bold">bilgi yarışması</strong>.
            Dizilerden, sokak röportajlarından ve canlı yayınlardan unutulmaz replikler. Arkadaşlarınla kapış,
            bilgini konuştur!
          </p>

          {/* Main Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => onStartQuiz('classic')}
              className="group flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#f751a1] to-[#b4136d] text-white font-bold text-base shadow-[0_0_30px_rgba(247,81,161,0.45)] hover:shadow-[0_0_40px_rgba(247,81,161,0.7)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <span
                className="material-symbols-outlined text-[24px] text-white group-hover:scale-110 transition-transform"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                play_arrow
              </span>
              <span>HEMEN BAŞLA</span>
            </button>

            <button
              onClick={onStartDuel}
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#141226] text-[#4cd7f6] font-bold text-base border border-white/5 shadow-md hover:bg-[#1f1e2f] hover:shadow-[0_0_20px_rgba(76,215,246,0.3)] hover:scale-[1.02] transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">swords</span>
              <span>1v1 Düello</span>
            </button>

            <button
              onClick={() => onStartQuiz('group')}
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#141226] text-[#10b981] font-bold text-base border border-white/5 shadow-md hover:bg-[#1f1e2f] hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:scale-[1.02] transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">groups</span>
              <span>Grup Yarışma</span>
            </button>
          </div>

          {/* Quick Mini Stats */}
          <div className="grid grid-cols-3 gap-3 pt-4 max-w-lg">
            <div className="bg-[#141226] border border-white/5 rounded-xl p-3 flex flex-col">
              <span className="text-2xl font-black text-white">88+</span>
              <span className="text-xs text-[#64748b]">Kült Replik</span>
            </div>
            <div className="bg-[#141226] border border-white/5 rounded-xl p-3 flex flex-col">
              <span className="text-2xl font-black text-[#4cd7f6]">51K+</span>
              <span className="text-xs text-[#64748b]">Çözülen Düello</span>
            </div>
            <div className="bg-[#141226] border border-white/5 rounded-xl p-3 flex flex-col">
              <span className="text-2xl font-black text-[#ffb95f]">0₺</span>
              <span className="text-xs text-[#64748b]">Tamamen Ücretsiz</span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Live Quiz Card + Badges */}
        <div className="lg:col-span-5 relative flex flex-col items-center">
          {/* Floating Badge: Leaderboard Peak */}
          <div className="absolute -top-6 -right-2 sm:-right-4 z-20 bg-[#1c1936]/95 border border-white/10 backdrop-blur-md rounded-2xl p-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#ca8100]/30 flex items-center justify-center text-[#ffb95f]">
              <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                trophy
              </span>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#94a3b8]">
                LİDER TABLOSU
              </span>
              <span className="text-sm text-white font-bold">
                #1 Ahmet Y. <span className="text-[#ffb95f]">· 14.250 P</span>
              </span>
            </div>
          </div>

          {/* Floating Badge: Recent Badge Unlock */}
          <div className="absolute -bottom-6 -left-2 sm:-left-4 z-20 bg-[#1c1936]/95 border border-white/10 backdrop-blur-md rounded-2xl p-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#f751a1]/20 flex items-center justify-center text-[#f751a1]">
              <span className="material-symbols-outlined text-[24px]">verified</span>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#f751a1]">
                SON KAZANILAN ROZET
              </span>
              <span className="text-sm text-white font-semibold">Meme Profesörü 🏆🎯🔥</span>
            </div>
          </div>

          {/* Main Simulated Quiz Interactive Widget */}
          <div className="w-full bg-[#141226] border border-white/10 rounded-3xl p-4 sm:p-5 shadow-2xl flex flex-col gap-4 relative overflow-hidden">
            {/* Quiz Top HUD */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-lg bg-[#1f1e2f] text-[#4cd7f6] text-xs font-bold">
                  SORU 7 / 10
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-[#f751a1]/20 text-[#ffb0cd] text-xs font-bold">
                  SERİ x3 🔥
                </span>
              </div>
              {/* Countdown Timer Visual */}
              <div className="flex items-center gap-1.5 text-[#ef4444] text-xs font-bold">
                <span className="material-symbols-outlined text-[18px]">timer</span>
                <span>00:0{timerCount}</span>
              </div>
            </div>

            {/* Video / Meme Thumbnail Frame with Quote Subtitle */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-[#0d0c1d] group shadow-inner border border-white/5">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsx_ZShZ1BPxcBPXvPWMlytApPKOmxMH3tOHMdM0dJBNs9Cfw-kNlQIB8HehwOYYgHBAhqyBQYwjUnEAFYvgvg0QesagSyIYyFcVNkxcu_iqnLi_S52Jg_G6oYk20ohgdc5U7xO7O2WYf5YWfAmtddzmsCqZbw8jYfgtwMt_6JOiT2c82Jgky2ZrAlUColP04okE3jgLjinfyj1z0uZ5H5fICyAbS-YzQrvngzT7ft-1zUH66y9SI"
                alt="Kuzey Güney Dizisi Efsane Sahne"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121123] via-transparent to-black/30"></div>
              <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-sm text-xs font-bold text-[#94a3b8] border border-white/10">
                KUZEY GÜNEY DİZİSİ
              </div>

              {/* Play button pulse */}
              <div
                onClick={() => onStartQuiz('classic')}
                className="absolute inset-0 flex items-center justify-center cursor-pointer"
              >
                <div className="w-14 h-14 rounded-full bg-[#f751a1]/90 text-white flex items-center justify-center shadow-[0_0_20px_rgba(247,81,161,0.6)] group-hover:scale-110 active:scale-95 transition-transform">
                  <span className="material-symbols-outlined text-[30px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    play_arrow
                  </span>
                </div>
              </div>

              {/* Question Subtitle Caption */}
              <div className="absolute bottom-2.5 left-2.5 right-2.5 p-2 rounded-xl bg-[#121123]/85 backdrop-blur-md border border-white/5">
                <p className="text-xs sm:text-sm text-white font-medium text-center">
                  "Kuzey fırında dururken içeri giren adama tam olarak ne dedi?"
                </p>
              </div>
            </div>

            {/* 4 Answer Options */}
            <div className="grid grid-cols-1 gap-2">
              {/* Option A */}
              <button
                disabled={isAnswered}
                onClick={() => handleHeroOptionClick(0)}
                className={`w-full p-2.5 sm:p-3 rounded-xl border text-left flex items-center justify-between transition-all ${
                  fiftyFiftyUsed ? 'opacity-30 pointer-events-none' : ''
                } ${
                  selectedOption === 0
                    ? 'bg-[#ef4444]/20 border-[#ef4444] shadow-[0_0_15px_rgba(239,68,68,0.4)]'
                    : 'bg-[#1f1e2f] border-white/5 hover:bg-[#29283a] hover:border-white/10'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-lg bg-[#141226] text-[#94a3b8] flex items-center justify-center text-xs font-bold">
                    A
                  </span>
                  <span className="text-xs sm:text-sm text-white font-medium">
                    Ekmek kalmadı kardeş, sonra gel.
                  </span>
                </div>
                {selectedOption === 0 && (
                  <span className="material-symbols-outlined text-[#ef4444] text-[20px]">cancel</span>
                )}
              </button>

              {/* Option B (Correct) */}
              <button
                disabled={isAnswered}
                onClick={() => handleHeroOptionClick(1)}
                className={`w-full p-2.5 sm:p-3 rounded-xl border text-left flex items-center justify-between transition-all ${
                  selectedOption === 1 || (isAnswered && selectedOption !== 1)
                    ? 'bg-[#10b981]/20 border-[#10b981] shadow-[0_0_18px_rgba(16,185,129,0.45)]'
                    : 'bg-[#1f1e2f] border-white/5 hover:bg-[#29283a] hover:border-white/10'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-lg bg-[#141226] text-[#94a3b8] flex items-center justify-center text-xs font-bold">
                    B
                  </span>
                  <span className="text-xs sm:text-sm text-white font-semibold">
                    "Kurabiye var simit var neye bakıyon?"
                  </span>
                </div>
                {(selectedOption === 1 || isAnswered) && (
                  <span
                    className="material-symbols-outlined text-[#10b981] text-[20px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                )}
              </button>

              {/* Option C */}
              <button
                disabled={isAnswered}
                onClick={() => handleHeroOptionClick(2)}
                className={`w-full p-2.5 sm:p-3 rounded-xl border text-left flex items-center justify-between transition-all ${
                  fiftyFiftyUsed ? 'opacity-30 pointer-events-none' : ''
                } ${
                  selectedOption === 2
                    ? 'bg-[#ef4444]/20 border-[#ef4444] shadow-[0_0_15px_rgba(239,68,68,0.4)]'
                    : 'bg-[#1f1e2f] border-white/5 hover:bg-[#29283a] hover:border-white/10'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-lg bg-[#141226] text-[#94a3b8] flex items-center justify-center text-xs font-bold">
                    C
                  </span>
                  <span className="text-xs sm:text-sm text-white font-medium">
                    Sen bizim fırını mı kesiyorsun bilader?
                  </span>
                </div>
                {selectedOption === 2 && (
                  <span className="material-symbols-outlined text-[#ef4444] text-[20px]">cancel</span>
                )}
              </button>

              {/* Option D */}
              <button
                disabled={isAnswered}
                onClick={() => handleHeroOptionClick(3)}
                className={`w-full p-2.5 sm:p-3 rounded-xl border text-left flex items-center justify-between transition-all ${
                  selectedOption === 3
                    ? 'bg-[#ef4444]/20 border-[#ef4444] shadow-[0_0_15px_rgba(239,68,68,0.4)]'
                    : 'bg-[#1f1e2f] border-white/5 hover:bg-[#29283a] hover:border-white/10'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-lg bg-[#141226] text-[#94a3b8] flex items-center justify-center text-xs font-bold">
                    D
                  </span>
                  <span className="text-xs sm:text-sm text-white font-medium">
                    Biz de birileriyiz yani bilader!
                  </span>
                </div>
                {selectedOption === 3 && (
                  <span className="material-symbols-outlined text-[#ef4444] text-[20px]">cancel</span>
                )}
              </button>
            </div>

            {/* Bottom Quiz Action & Lifeline Bar */}
            <div className="flex items-center justify-between pt-1">
              <span className="text-xs text-[#94a3b8] flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-[#4cd7f6]">flash_on</span>
                <span>Hızlı cevap = +250 Bonus Puan</span>
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleFiftyFifty}
                  disabled={fiftyFiftyUsed}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold flex items-center gap-1 transition-all ${
                    fiftyFiftyUsed
                      ? 'bg-[#1f1e2f] text-gray-500 cursor-not-allowed'
                      : 'bg-[#1f1e2f] text-[#4cd7f6] hover:bg-[#29283a] border border-[#4cd7f6]/20'
                  }`}
                >
                  <span>50:50</span>
                </button>
                <button
                  onClick={() => onStartQuiz('classic')}
                  className="px-2.5 py-1 rounded-lg bg-[#f751a1]/20 text-[#ffb0cd] hover:bg-[#f751a1]/30 text-xs font-bold border border-[#f751a1]/30 flex items-center gap-1"
                >
                  <span>Tümünü Oyna →</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
