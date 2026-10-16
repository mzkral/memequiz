import React, { useState, useEffect, useRef } from 'react';
import { MEME_QUESTIONS, QuizQuestion } from '../data/memeData';
import { sounds } from '../utils/audio';
import { X, Volume2, Trophy, RotateCcw, Share2, Heart, Award, ArrowRight } from 'lucide-react';

interface QuizGameScreenProps {
  mode: 'classic' | 'speed' | 'hardcore' | 'endless' | 'daily';
  initialMemeTitle?: string;
  onClose: () => void;
  onUpdateUserScore?: (points: number) => void;
}

export const QuizGameScreen: React.FC<QuizGameScreenProps> = ({
  mode,
  initialMemeTitle,
  onClose,
  onUpdateUserScore
}) => {
  // Select initial questions set
  const [questions, setQuestions] = useState<QuizQuestion[]>(() => {
    let pool = [...MEME_QUESTIONS];
    if (initialMemeTitle) {
      // Prioritize question matching this meme
      const matched = pool.filter((q) =>
        q.sceneTitle.toLowerCase().includes(initialMemeTitle.toLowerCase()) ||
        q.question.toLowerCase().includes(initialMemeTitle.toLowerCase())
      );
      if (matched.length > 0) {
        pool = [...matched, ...pool.filter((q) => !matched.includes(q))];
      }
    } else {
      // Shuffle slightly
      pool = [...pool].sort(() => Math.random() - 0.5);
    }
    return pool;
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [lives, setLives] = useState(3);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [fiftyFiftyUsed, setFiftyFiftyUsed] = useState(false);
  const [disabledOptions, setDisabledOptions] = useState<number[]>([]);
  const [gameOver, setGameOver] = useState(false);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);

  // Timer setup based on mode
  const initialTime = mode === 'speed' ? 10 : 18;
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const currentQ = questions[currentIndex % questions.length];
  const maxQuestions = mode === 'endless' ? 999 : 10;

  // Question timer
  useEffect(() => {
    if (gameOver || isAnswered) return;

    setTimeLeft(initialTime);
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current!);
          handleTimeout();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex, isAnswered, gameOver]);

  const handleTimeout = () => {
    setIsAnswered(true);
    setSelectedOption(-1);
    sounds.playWrong();
    setStreak(0);
    if (mode === 'hardcore') {
      const nextLives = lives - 1;
      setLives(nextLives);
      if (nextLives <= 0) {
        setGameOver(true);
      }
    }
  };

  const handleSelectOption = (index: number) => {
    if (isAnswered) return;
    if (timerRef.current) clearInterval(timerRef.current);

    setSelectedOption(index);
    setIsAnswered(true);

    const isCorrect = index === currentQ.correctIndex;
    if (isCorrect) {
      sounds.playCorrect();
      const speedBonus = timeLeft > initialTime / 2 ? 150 : 50;
      const streakBonus = streak * 50;
      const pointsEarned = 100 + speedBonus + streakBonus;
      setScore((prev) => prev + pointsEarned);
      setStreak((prev) => prev + 1);
      setCorrectAnswersCount((prev) => prev + 1);

      if (streak + 1 >= 3) {
        setTimeout(() => sounds.playStreak(), 200);
      }
    } else {
      sounds.playWrong();
      setStreak(0);
      if (mode === 'hardcore') {
        const nextLives = lives - 1;
        setLives(nextLives);
        if (nextLives <= 0) {
          setTimeout(() => setGameOver(true), 1200);
        }
      }
    }
  };

  const handleFiftyFifty = () => {
    if (fiftyFiftyUsed || isAnswered) return;
    sounds.playJoker();
    setFiftyFiftyUsed(true);

    // disable two wrong options
    const wrongIndices = currentQ.options
      .map((_, i) => i)
      .filter((i) => i !== currentQ.correctIndex);
    const toDisable = wrongIndices.slice(0, 2);
    setDisabledOptions(toDisable);
  };

  const handleNextQuestion = () => {
    if (currentIndex + 1 >= Math.min(questions.length, maxQuestions)) {
      setGameOver(true);
      if (onUpdateUserScore) {
        onUpdateUserScore(score);
      }
    } else {
      setCurrentIndex((prev) => prev + 1);
      setIsAnswered(false);
      setSelectedOption(null);
      setDisabledOptions([]);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setScore(0);
    setStreak(0);
    setLives(3);
    setSelectedOption(null);
    setIsAnswered(false);
    setDisabledOptions([]);
    setFiftyFiftyUsed(false);
    setGameOver(false);
    setCorrectAnswersCount(0);
    setQuestions([...MEME_QUESTIONS].sort(() => Math.random() - 0.5));
  };

  // Get Player Meme Badge Title
  const getPlayerTitle = () => {
    const accuracy = (correctAnswersCount / Math.max(1, currentIndex + 1)) * 100;
    if (accuracy >= 90 && score > 1500) return 'Meme Profesörü 🏆🎯🔥';
    if (accuracy >= 75) return 'Viral Avcısı ⚡😎';
    if (accuracy >= 50) return 'Caps Nostaljisti 🍿';
    return 'Acemi Çırak 🐣';
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#121123] flex flex-col justify-between text-left">
      {/* Top Bar Navigation */}
      <header className="sticky top-0 z-30 bg-[#121123]/90 backdrop-blur-xl border-b border-white/10 px-4 sm:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#f751a1]/20 flex items-center justify-center text-[#f751a1]">
            <img
              src="https://lh3.googleusercontent.com/aida/AEtjO1XG_pKST0Cu9kdbEhdG4WGFtwvFw5GsmBXFuLAs363XvNwXf_lNuy9HV1HeV64Mn34y9n0DfUslaZBgt2gRsSKpFNKrK3xt0JPrx9ZiVO8Or1LhCcw8u4hlQjVRrDcf3K1Q_EXGVvMkrOvv3On_a2ALB8frbtMxtuN3hrwsdthnJawVtjECtK6FeEyCVe1zvRYSPCKp8Z3tEpM1-Ohh5X_Z9gMf5qKjeNJ0seQAaq51z8eEwD-x0p0Jig"
              alt="Logo"
              className="w-8 h-8 object-contain"
            />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-black text-white">Meme Quiz Arenası</h2>
            <span className="text-xs text-[#94a3b8] font-semibold uppercase tracking-wider">
              {mode === 'speed'
                ? '⚡ Hız Modu (10 Saniye)'
                : mode === 'hardcore'
                ? '💀 Hardcore Mod'
                : mode === 'daily'
                ? '📅 Günlük Meydan Okuma'
                : mode === 'endless'
                ? '♾️ Sonsuz Mod'
                : '🎮 Klasik Mod'}
            </span>
          </div>
        </div>

        <button
          onClick={onClose}
          className="p-2.5 rounded-xl bg-[#141226] text-[#94a3b8] hover:text-white hover:bg-[#1f1e2f] border border-white/5 transition-all cursor-pointer flex items-center gap-1 text-xs font-bold"
        >
          <X size={18} />
          <span className="hidden sm:inline">Çıkış</span>
        </button>
      </header>

      {/* Main Game Screen Content */}
      <main className="max-w-4xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8 flex-1 flex flex-col justify-center">
        {!gameOver ? (
          <div className="w-full bg-[#141226] border border-white/10 rounded-3xl p-4 sm:p-7 shadow-2xl flex flex-col gap-5 relative backdrop-blur-md">
            {/* Top HUD Stats: Progress, Timer, Score & Streak */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 items-center bg-[#1f1e2f]/80 p-3 rounded-2xl border border-white/5">
              {/* Question progress */}
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#4cd7f6] text-[22px]">help</span>
                <div>
                  <span className="text-[10px] text-[#64748b] uppercase font-bold tracking-wider block">
                    İlerleme
                  </span>
                  <span className="text-sm sm:text-base font-black text-white">
                    Soru {currentIndex + 1} / {maxQuestions === 999 ? '∞' : maxQuestions}
                  </span>
                </div>
              </div>

              {/* Timer */}
              <div className="flex items-center gap-2 justify-center">
                <div className="relative w-8 h-8 flex items-center justify-center">
                  <svg className="w-8 h-8 -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="text-[#29283a]"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3.5"
                    />
                    <path
                      className={timeLeft <= 4 ? 'text-[#ef4444]' : 'text-[#4cd7f6]'}
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeDasharray={`${(timeLeft / initialTime) * 100}, 100`}
                      strokeLinecap="round"
                      strokeWidth="3.5"
                    />
                  </svg>
                  <span
                    className={`absolute text-[11px] font-black ${
                      timeLeft <= 4 ? 'text-[#ef4444] animate-pulse' : 'text-white'
                    }`}
                  >
                    {timeLeft}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] text-[#64748b] uppercase font-bold tracking-wider block">
                    Süre
                  </span>
                  <span
                    className={`text-sm font-bold ${
                      timeLeft <= 4 ? 'text-[#ef4444]' : 'text-[#4cd7f6]'
                    }`}
                  >
                    {timeLeft} sn
                  </span>
                </div>
              </div>

              {/* Score */}
              <div className="flex items-center gap-2 justify-center">
                <span
                  className="material-symbols-outlined text-[#ffb95f] text-[22px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <div>
                  <span className="text-[10px] text-[#64748b] uppercase font-bold tracking-wider block">
                    Skor
                  </span>
                  <span className="text-sm sm:text-base font-black text-[#ffb95f]">{score} Puan</span>
                </div>
              </div>

              {/* Streak or Hardcore Lives */}
              <div className="flex items-center gap-2 justify-end">
                {mode === 'hardcore' ? (
                  <div className="flex items-center gap-1">
                    {[1, 2, 3].map((heart) => (
                      <Heart
                        key={heart}
                        size={18}
                        className={heart <= lives ? 'text-[#ef4444] fill-[#ef4444]' : 'text-[#343346]'}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="px-3 py-1 rounded-full bg-[#f751a1]/20 border border-[#f751a1]/30 flex items-center gap-1.5">
                    <span className="text-xs">🔥</span>
                    <span className="text-xs font-black text-[#ffb0cd] uppercase tracking-wider">
                      SERİ x{streak}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Video / Scene Frame Preview */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-[#0d0c1d] group shadow-inner border border-white/10">
              <img
                src={currentQ.imageUrl}
                alt={currentQ.sceneTitle}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121123]/95 via-transparent to-black/40"></div>

              {/* Scene Category Pill */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-[#4cd7f6] text-xs font-bold border border-[#4cd7f6]/20">
                <span className="material-symbols-outlined text-[14px]">movie</span>
                <span>
                  {currentQ.category} · {currentQ.sceneTitle}
                </span>
              </div>

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-[#f751a1]/90 text-white flex items-center justify-center shadow-[0_0_30px_rgba(247,81,161,0.6)] group-hover:scale-110 active:scale-95 transition-all">
                  <span className="material-symbols-outlined text-[36px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    play_arrow
                  </span>
                </div>
              </div>

              {/* Sound Hint Badge */}
              <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-sm text-[#94a3b8] text-xs flex items-center gap-1">
                <Volume2 size={14} className="text-[#4cd7f6]" />
                <span>Ses açık oyna</span>
              </div>
            </div>

            {/* Question Text */}
            <div className="py-1">
              <span className="text-xs uppercase tracking-widest text-[#64748b] font-black block mb-1">
                SORU:
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                "{currentQ.question}"
              </h2>
            </div>

            {/* 4 Options Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
              {currentQ.options.map((opt, idx) => {
                const letters = ['A', 'B', 'C', 'D'];
                const isSelected = selectedOption === idx;
                const isCorrect = idx === currentQ.correctIndex;
                const isDisabled = disabledOptions.includes(idx);

                let btnStyles = 'bg-[#1f1e2f] border-white/5 hover:bg-[#29283a] hover:border-white/10';

                if (isAnswered) {
                  if (isCorrect) {
                    btnStyles = 'bg-[#10b981]/25 border-[#10b981] shadow-[0_0_20px_rgba(16,185,129,0.5)]';
                  } else if (isSelected) {
                    btnStyles = 'bg-[#ef4444]/25 border-[#ef4444] shadow-[0_0_20px_rgba(239,68,68,0.5)]';
                  } else {
                    btnStyles = 'bg-[#1f1e2f] border-white/5 opacity-40';
                  }
                } else if (isDisabled) {
                  btnStyles = 'bg-[#1f1e2f] opacity-25 pointer-events-none';
                }

                return (
                  <button
                    key={idx}
                    disabled={isAnswered || isDisabled}
                    onClick={() => handleSelectOption(idx)}
                    className={`w-full p-3.5 rounded-2xl border text-left flex items-center justify-between transition-all cursor-pointer ${btnStyles}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-xl bg-[#141226] border border-white/10 text-[#94a3b8] flex items-center justify-center font-black text-sm shrink-0">
                        {letters[idx]}
                      </span>
                      <span className="text-sm font-semibold text-white leading-tight">
                        {opt}
                      </span>
                    </div>

                    {isAnswered && isCorrect && (
                      <span
                        className="material-symbols-outlined text-[#10b981] text-[22px] shrink-0"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        check_circle
                      </span>
                    )}
                    {isAnswered && isSelected && !isCorrect && (
                      <span className="material-symbols-outlined text-[#ef4444] text-[22px] shrink-0">
                        cancel
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Answer Trivia Explanation Box (Shows after answering) */}
            {isAnswered && (
              <div className="p-4 rounded-2xl bg-[#1f1e2f] border border-[#f751a1]/30 flex flex-col gap-1.5 animate-in fade-in slide-in-from-bottom-2 duration-200">
                <span className="text-xs font-black uppercase tracking-wider text-[#ffb0cd] flex items-center gap-1.5">
                  <Award size={14} /> REPLİĞİN HİKAYESİ ({currentQ.origin} · {currentQ.year || 'Kült'})
                </span>
                <p className="text-xs sm:text-sm text-[#cbd5e1] leading-relaxed">
                  {currentQ.explanation}
                </p>
              </div>
            )}

            {/* Bottom Actions: Lifelines & Next Question */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-white/5">
              {/* Jokers */}
              <div className="flex items-center gap-2">
                <button
                  disabled={fiftyFiftyUsed || isAnswered}
                  onClick={handleFiftyFifty}
                  className={`px-3 py-2 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                    fiftyFiftyUsed
                      ? 'bg-[#1f1e2f] text-gray-500 border-white/5 cursor-not-allowed'
                      : 'bg-[#1f1e2f] text-[#4cd7f6] hover:bg-[#29283a] border-[#4cd7f6]/30 hover:scale-105'
                  }`}
                >
                  <span className="material-symbols-outlined text-[16px]">flaky</span>
                  <span>50:50 Jokeri</span>
                </button>

                <button
                  disabled={isAnswered}
                  onClick={() => {
                    handleTimeout();
                  }}
                  className="px-3 py-2 rounded-xl bg-[#1f1e2f] hover:bg-[#29283a] border border-white/5 text-[#94a3b8] hover:text-white text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[16px]">fast_forward</span>
                  <span>Pas Geç</span>
                </button>
              </div>

              {/* Next Question Button */}
              {isAnswered && (
                <button
                  onClick={handleNextQuestion}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#f751a1] to-[#b4136d] text-white text-sm font-bold flex items-center gap-2 shadow-[0_0_20px_rgba(247,81,161,0.45)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
                >
                  <span>
                    {currentIndex + 1 >= Math.min(questions.length, maxQuestions)
                      ? 'Sonuçları Gör'
                      : 'Sıradaki Soru'}
                  </span>
                  <ArrowRight size={18} />
                </button>
              )}
            </div>
          </div>
        ) : (
          /* Game Over / Results Summary Screen */
          <div className="w-full bg-[#141226] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl flex flex-col items-center gap-6 text-center max-w-xl mx-auto animate-in zoom-in-95 duration-200">
            <div className="w-20 h-20 rounded-3xl bg-[#f751a1]/20 text-[#f751a1] flex items-center justify-center shadow-[0_0_30px_rgba(247,81,161,0.5)]">
              <Trophy size={42} className="text-[#ffb95f]" />
            </div>

            <div>
              <span className="text-xs font-black uppercase tracking-widest text-[#10b981]">
                YARIŞMA TAMAMLANDI!
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white mt-1">Harika Performans!</h2>
              <p className="text-sm text-[#94a3b8] mt-1">
                Kült Türk internet meme hafızanı kanıtladın.
              </p>
            </div>

            {/* Score & Accuracy Card */}
            <div className="grid grid-cols-3 gap-3 w-full bg-[#1f1e2f] border border-white/5 p-4 rounded-2xl">
              <div className="flex flex-col">
                <span className="text-[10px] text-[#64748b] uppercase font-bold">Toplam Puan</span>
                <span className="text-2xl font-black text-[#ffb95f]">{score}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-[#64748b] uppercase font-bold">Doğru Sayısı</span>
                <span className="text-2xl font-black text-[#10b981]">
                  {correctAnswersCount} / {Math.min(questions.length, maxQuestions)}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-[#64748b] uppercase font-bold">İsabet Oranı</span>
                <span className="text-2xl font-black text-[#4cd7f6]">
                  {Math.round((correctAnswersCount / Math.max(1, currentIndex + 1)) * 100)}%
                </span>
              </div>
            </div>

            {/* Unlocked Title Badge */}
            <div className="w-full p-4 rounded-2xl bg-gradient-to-r from-[#f751a1]/20 via-[#1f1e2f] to-[#4cd7f6]/20 border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3 text-left">
                <span className="text-3xl">🎖️</span>
                <div>
                  <span className="text-[10px] text-[#ffb0cd] uppercase font-bold tracking-wider">
                    KAZANILAN UNVAN
                  </span>
                  <h4 className="text-lg font-black text-white">{getPlayerTitle()}</h4>
                </div>
              </div>
              <span className="text-xs font-bold text-[#10b981] bg-[#10b981]/15 px-2.5 py-1 rounded-lg">
                Onaylandı
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 w-full pt-2">
              <button
                onClick={handleRestart}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#f751a1] to-[#b4136d] text-white font-bold text-sm shadow-[0_0_20px_rgba(247,81,161,0.4)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <RotateCcw size={16} />
                <span>Tekrar Oyna</span>
              </button>

              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: 'Meme Yarışması Skorum',
                      text: `Meme Yarışması'nda ${score} puan aldım ve unvanım "${getPlayerTitle()}"! Sen de gel kapışalım!`,
                      url: window.location.href
                    });
                  } else {
                    navigator.clipboard.writeText(
                      `Meme Yarışması'nda ${score} puan aldım ve "${getPlayerTitle()}" unvanını kaptım! Sen de gel: ${window.location.href}`
                    );
                    alert('Skor panoya kopyalandı!');
                  }
                }}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#29283a] hover:bg-[#39374a] text-white font-bold text-sm transition-all cursor-pointer border border-white/5"
              >
                <Share2 size={16} />
                <span>Skoru Paylaş</span>
              </button>

              <button
                onClick={onClose}
                className="w-full py-2.5 rounded-xl text-xs font-bold text-[#94a3b8] hover:text-white transition-colors cursor-pointer"
              >
                Ana Sayfaya Dön
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
