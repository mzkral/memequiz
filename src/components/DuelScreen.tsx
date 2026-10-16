import React, { useState, useEffect } from 'react';
import { MEME_QUESTIONS, QuizQuestion } from '../data/memeData';
import { sounds } from '../utils/audio';
import { X, Swords, Copy, Check, RotateCcw } from 'lucide-react';

interface DuelScreenProps {
  onClose: () => void;
  user: { name: string; avatar: string } | null;
}

const OPPONENTS = [
  { name: 'mert_online', title: 'Kuzeyci', accuracy: '89%', speed: 1.2 },
  { name: 'SedaDundar', title: 'Viral Avcısı', accuracy: '90%', speed: 1.0 },
  { name: 'Boran_E', title: 'Caps Nostaljisti', accuracy: '95%', speed: 0.9 },
  { name: 'Gizem_Z', title: 'Meme Dedektifi', accuracy: '87%', speed: 1.3 }
];

export const DuelScreen: React.FC<DuelScreenProps> = ({ onClose, user }) => {
  const [matchState, setMatchState] = useState<'matchmaking' | 'playing' | 'ended'>('matchmaking');
  const [opponent, setOpponent] = useState(OPPONENTS[0]);
  const [copiedLink, setCopiedLink] = useState(false);

  // Match state
  const [questions] = useState<QuizQuestion[]>(() =>
    [...MEME_QUESTIONS].sort(() => Math.random() - 0.5).slice(0, 5)
  );
  const [questionIndex, setQuestionIndex] = useState(0);
  const [userScore, setUserScore] = useState(0);
  const [opponentScore, setOpponentScore] = useState(0);
  const [opponentStatus, setOpponentStatus] = useState('Düşünüyor...');
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [timeLeft, setTimeLeft] = useState(12);

  const currentQ = questions[questionIndex];
  const userName = user?.name || 'Sen';

  // Matchmaking simulation
  useEffect(() => {
    if (matchState === 'matchmaking') {
      const selected = OPPONENTS[Math.floor(Math.random() * OPPONENTS.length)];
      setOpponent(selected);
      const timer = setTimeout(() => {
        sounds.playClick();
        setMatchState('playing');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [matchState]);

  // Question timer and AI opponent behavior
  useEffect(() => {
    if (matchState !== 'playing' || isAnswered) return;

    setTimeLeft(12);
    setOpponentStatus('Düşünüyor...');

    // Opponent answering after random delay
    const opponentDelay = (2000 + Math.random() * 3000) * opponent.speed;
    const opponentTimer = setTimeout(() => {
      const isOpponentCorrect = Math.random() < 0.85;
      if (isOpponentCorrect) {
        setOpponentScore((prev) => prev + 180);
        setOpponentStatus('✅ Doğru cevapladı! (+180 P)');
      } else {
        setOpponentStatus('❌ Yanlış cevapladı!');
      }
    }, opponentDelay);

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleUserAnswer(-1);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearTimeout(opponentTimer);
      clearInterval(timer);
    };
  }, [questionIndex, matchState, isAnswered]);

  const handleUserAnswer = (idx: number) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    setIsAnswered(true);

    const isCorrect = idx === currentQ.correctIndex;
    if (isCorrect) {
      sounds.playCorrect();
      const points = 100 + timeLeft * 10;
      setUserScore((prev) => prev + points);
    } else {
      sounds.playWrong();
    }
  };

  const handleNext = () => {
    if (questionIndex + 1 >= questions.length) {
      setMatchState('ended');
      if (userScore >= opponentScore) {
        sounds.playStreak();
      }
    } else {
      setQuestionIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`${window.location.origin}/#oda-1v1-meme-${Math.floor(Math.random() * 9000 + 1000)}`);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#121123] flex flex-col justify-between text-left">
      {/* Top Header */}
      <header className="sticky top-0 z-30 bg-[#121123]/90 backdrop-blur-xl border-b border-white/10 px-4 sm:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-[#4cd7f6]/20 text-[#4cd7f6] flex items-center justify-center">
            <Swords size={20} />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-black text-white">1v1 Canlı Düello Odası</h2>
            <span className="text-xs text-[#4cd7f6] font-semibold">Senkronize Çok Oyunculu</span>
          </div>
        </div>

        <button
          onClick={onClose}
          className="p-2.5 rounded-xl bg-[#141226] text-[#94a3b8] hover:text-white border border-white/5 transition-all cursor-pointer"
        >
          <X size={18} />
        </button>
      </header>

      {/* Main Body */}
      <main className="max-w-4xl w-full mx-auto px-4 sm:px-6 py-6 flex-1 flex flex-col justify-center">
        {matchState === 'matchmaking' && (
          <div className="w-full max-w-md mx-auto bg-[#141226] border border-white/10 rounded-3xl p-8 text-center flex flex-col items-center gap-6 shadow-2xl">
            <div className="relative">
              <div className="w-20 h-20 rounded-full border-4 border-[#4cd7f6] border-t-transparent animate-spin flex items-center justify-center"></div>
              <Swords size={32} className="absolute inset-0 m-auto text-[#4cd7f6]" />
            </div>

            <div>
              <h3 className="text-2xl font-black text-white">Rakip Aranıyor...</h3>
              <p className="text-xs text-[#94a3b8] mt-1">
                Aktif 1.428 yarışmacı arasından sana en uygun meme ustası seçiliyor.
              </p>
            </div>

            <div className="w-full p-3.5 rounded-2xl bg-[#1f1e2f] border border-white/5 flex items-center justify-between">
              <span className="text-xs text-[#94a3b8] truncate">Arkadaşını odaya çağır:</span>
              <button
                onClick={handleCopyLink}
                className="px-3 py-1.5 rounded-xl bg-[#4cd7f6]/20 text-[#4cd7f6] hover:bg-[#4cd7f6]/30 text-xs font-bold flex items-center gap-1 transition-all cursor-pointer shrink-0"
              >
                {copiedLink ? <Check size={14} /> : <Copy size={14} />}
                <span>{copiedLink ? 'Kopyalandı' : 'Oda Linki'}</span>
              </button>
            </div>
          </div>
        )}

        {matchState === 'playing' && (
          <div className="w-full bg-[#141226] border border-white/10 rounded-3xl p-4 sm:p-7 shadow-2xl flex flex-col gap-5">
            {/* Duel Scoreboard HUD */}
            <div className="grid grid-cols-3 items-center bg-[#1f1e2f] border border-white/5 p-4 rounded-2xl">
              {/* User Side */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#f751a1] text-white flex items-center justify-center font-black text-sm shadow-[0_0_15px_rgba(247,81,161,0.5)]">
                  {userName.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <span className="text-sm font-bold text-white block">{userName}</span>
                  <span className="text-xl font-black text-[#f751a1]">{userScore} P</span>
                </div>
              </div>

              {/* Center VS & Timer */}
              <div className="flex flex-col items-center">
                <span className="text-xs font-black text-[#94a3b8] uppercase tracking-wider">
                  Soru {questionIndex + 1} / {questions.length}
                </span>
                <span className="text-2xl font-black text-white">{timeLeft} sn</span>
                <span className="text-[10px] text-[#4cd7f6] font-semibold">{opponentStatus}</span>
              </div>

              {/* Opponent Side */}
              <div className="flex items-center gap-3 justify-end text-right">
                <div>
                  <span className="text-sm font-bold text-white block">{opponent.name}</span>
                  <span className="text-xl font-black text-[#4cd7f6]">{opponentScore} P</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#4cd7f6] text-black flex items-center justify-center font-black text-sm shadow-[0_0_15px_rgba(76,215,246,0.5)]">
                  {opponent.name.slice(0, 2).toUpperCase()}
                </div>
              </div>
            </div>

            {/* Scene Image */}
            <div className="relative w-full aspect-video max-h-72 rounded-2xl overflow-hidden bg-[#0d0c1d] border border-white/10">
              <img
                src={currentQ.imageUrl}
                alt={currentQ.sceneTitle}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121123]/90 via-transparent to-black/30"></div>
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/75 text-xs font-bold text-[#4cd7f6] border border-white/10">
                {currentQ.sceneTitle}
              </div>
            </div>

            {/* Question */}
            <h2 className="text-lg sm:text-xl font-bold text-white">"{currentQ.question}"</h2>

            {/* Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentQ.options.map((opt, idx) => {
                const isSelected = selectedOption === idx;
                const isCorrect = idx === currentQ.correctIndex;
                let btnClass = 'bg-[#1f1e2f] border-white/5 hover:bg-[#29283a]';

                if (isAnswered) {
                  if (isCorrect) btnClass = 'bg-[#10b981]/25 border-[#10b981]';
                  else if (isSelected) btnClass = 'bg-[#ef4444]/25 border-[#ef4444]';
                  else btnClass = 'opacity-40 bg-[#1f1e2f]';
                }

                return (
                  <button
                    key={idx}
                    disabled={isAnswered}
                    onClick={() => handleUserAnswer(idx)}
                    className={`p-3.5 rounded-2xl border text-left flex items-center justify-between text-sm font-medium text-white transition-all cursor-pointer ${btnClass}`}
                  >
                    <span>{opt}</span>
                    {isAnswered && isCorrect && <span className="text-[#10b981] font-bold">✓</span>}
                  </button>
                );
              })}
            </div>

            {isAnswered && (
              <div className="pt-2 flex justify-end">
                <button
                  onClick={handleNext}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#4cd7f6] to-[#03b5d3] text-black font-bold text-sm shadow-[0_0_20px_rgba(76,215,246,0.4)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
                >
                  {questionIndex + 1 >= questions.length ? 'Düelloyu Bitir' : 'Sıradaki Soru →'}
                </button>
              </div>
            )}
          </div>
        )}

        {matchState === 'ended' && (
          <div className="w-full max-w-md mx-auto bg-[#141226] border border-white/10 rounded-3xl p-8 text-center flex flex-col items-center gap-6 shadow-2xl">
            <div className="w-20 h-20 rounded-3xl bg-[#4cd7f6]/20 text-[#4cd7f6] flex items-center justify-center shadow-[0_0_25px_rgba(76,215,246,0.4)]">
              <Swords size={40} />
            </div>

            <div>
              <span className="text-xs font-black uppercase tracking-widest text-[#4cd7f6]">
                DÜELLO BİTTİ
              </span>
              <h3 className="text-3xl font-black text-white mt-1">
                {userScore > opponentScore
                  ? '🏆 Zafer Senin!'
                  : userScore === opponentScore
                  ? '🤝 Berabere Kaldınız!'
                  : '💀 Bu Sefer Rakip Kazandı!'}
              </h3>
            </div>

            {/* Final Scores Comparison */}
            <div className="w-full grid grid-cols-2 gap-4 bg-[#1f1e2f] border border-white/5 p-4 rounded-2xl">
              <div className="flex flex-col">
                <span className="text-xs text-[#94a3b8] font-bold">{userName}</span>
                <span className="text-2xl font-black text-[#f751a1]">{userScore} P</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-[#94a3b8] font-bold">{opponent.name}</span>
                <span className="text-2xl font-black text-[#4cd7f6]">{opponentScore} P</span>
              </div>
            </div>

            <div className="flex gap-3 w-full">
              <button
                onClick={() => {
                  setUserScore(0);
                  setOpponentScore(0);
                  setQuestionIndex(0);
                  setSelectedOption(null);
                  setIsAnswered(false);
                  setMatchState('matchmaking');
                }}
                className="flex-1 py-3 rounded-xl bg-gradient-to-r from-[#f751a1] to-[#b4136d] text-white font-bold text-sm flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <RotateCcw size={16} />
                <span>Rövanş İste</span>
              </button>
              <button
                onClick={onClose}
                className="px-5 py-3 rounded-xl bg-[#29283a] text-white font-bold text-sm hover:bg-[#39374a] transition-all cursor-pointer"
              >
                Çıkış
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
