import React, { useState } from 'react';
import { LEADERBOARD_DATA, Timeframe } from '../data/leaderboardData';

interface DailyChallengeAndLeaderboardProps {
  onStartDaily: () => void;
  onStartDuel: () => void;
  onOpenAuth: () => void;
}

export const DailyChallengeAndLeaderboard: React.FC<DailyChallengeAndLeaderboardProps> = ({
  onStartDaily,
  onStartDuel,
  onOpenAuth
}) => {
  const [activeTab, setActiveTab] = useState<Timeframe>('today');
  const [showAllRanks, setShowAllRanks] = useState(false);

  const currentList = LEADERBOARD_DATA[activeTab] || LEADERBOARD_DATA.today;
  const displayList = showAllRanks ? currentList : currentList.slice(0, 5);

  return (
    <section className="w-full px-4 sm:px-6 py-16 sm:py-20 bg-[#0d0c1d]" id="liderlik-bolumu">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Daily Challenge Banner */}
        <div className="w-full rounded-3xl bg-gradient-to-r from-[#141226] via-[#29283a] to-[#141226] border border-white/10 p-6 sm:p-10 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-[#f751a1] text-white flex items-center justify-center shadow-[0_0_25px_rgba(247,81,161,0.5)] shrink-0">
              <span className="material-symbols-outlined text-[36px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                calendar_today
              </span>
            </div>
            <div className="flex flex-col text-left">
              <div className="inline-flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-[#10b981] animate-ping"></span>
                <span className="text-xs font-black uppercase tracking-wider text-[#10b981]">
                  GÜNÜN MEYDAN OKUMASI
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">Günün 10 Soruluk Özel Seti Yayında!</h3>
              <p className="text-sm text-[#94a3b8] max-w-xl mt-1">
                Her gün gece yarısı yenilenir. Bugün herkes aynı 10 soruyu çözüyor. En yüksek doğruluk oranı ve en kısa
                süreyle günün birincisi sen ol!
              </p>
            </div>
          </div>
          <button
            onClick={onStartDaily}
            className="shrink-0 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#f751a1] to-[#b4136d] hover:brightness-110 text-white font-bold text-base transition-all shadow-[0_0_25px_rgba(247,81,161,0.4)] hover:scale-105 active:scale-95 cursor-pointer"
          >
            Günün Mücadelesine Katıl
          </button>
        </div>

        {/* Skor Tablosu + Live Performance Chart Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Leaderboard Table */}
          <div className="lg:col-span-8 bg-[#141226] border border-white/5 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-white/5">
              <div>
                <span className="text-xs font-black text-[#ffb95f] uppercase tracking-wider">ONUR KÜRSÜSÜ</span>
                <h3 className="text-2xl font-black text-white mt-0.5">Skor Tablosu</h3>
              </div>
              {/* Tab Pills */}
              <div className="flex items-center gap-1 p-1 rounded-xl bg-[#1f1e2f] border border-white/5">
                {(
                  [
                    { key: 'today', label: 'Bugün' },
                    { key: 'week', label: 'Son 7 Gün' },
                    { key: 'month', label: 'Son 30 Gün' },
                    { key: 'all', label: 'Tüm Zamanlar' }
                  ] as const
                ).map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      activeTab === tab.key
                        ? 'bg-[#f751a1] text-white shadow-[0_0_15px_rgba(247,81,161,0.5)]'
                        : 'text-[#94a3b8] hover:text-white'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Ranking List */}
            <div className="flex flex-col gap-2.5">
              {displayList.map((user) => (
                <div
                  key={user.rank}
                  className={`flex items-center justify-between p-3.5 rounded-2xl transition-all ${
                    user.rank === 1
                      ? 'bg-[#29283a]/70 border border-[#ffb95f]/30'
                      : user.rank === 2
                      ? 'bg-[#1f1e2f]/80 border border-slate-600/30'
                      : user.rank === 3
                      ? 'bg-[#1f1e2f]/80 border border-amber-800/30'
                      : 'bg-[#1f1e2f]/40 border border-white/5 hover:bg-[#1f1e2f]'
                  }`}
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                        user.rank === 1
                          ? 'bg-[#ffb95f]/20 text-[#ffb95f]'
                          : user.rank === 2
                          ? 'bg-slate-400/20 text-slate-300'
                          : user.rank === 3
                          ? 'bg-amber-700/20 text-amber-500'
                          : 'bg-[#141226] text-[#94a3b8]'
                      }`}
                    >
                      {user.rank}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-[#141226] border border-white/10 flex items-center justify-center font-bold text-xs text-white">
                      {user.initials}
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="font-bold text-sm text-white flex items-center gap-1.5">
                        {user.name}
                        {user.rank === 1 && (
                          <span
                            className="material-symbols-outlined text-[16px] text-[#ffb95f]"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                          >
                            military_tech
                          </span>
                        )}
                      </span>
                      <span className="text-xs text-[#64748b]">
                        {user.title} · {user.stats}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 sm:gap-6">
                    <div className="text-right">
                      <span className="text-base sm:text-lg font-black text-white">{user.score}</span>
                      <span className="block text-[10px] text-[#64748b] uppercase">Puan</span>
                    </div>
                    <span className="px-2 py-0.5 rounded-md bg-[#10b981]/15 text-[#10b981] text-xs font-bold border border-[#10b981]/20">
                      {user.accuracy}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-white/5">
              <span className="text-xs text-[#64748b]">Tamamlanan yarışmalar takma ad ile listelenir.</span>
              <button
                onClick={() => setShowAllRanks(!showAllRanks)}
                className="text-xs font-bold text-[#f751a1] hover:underline cursor-pointer"
              >
                {showAllRanks ? 'Daha Az Göster ↑' : 'Tüm Sıralamayı Gör (Top 100) →'}
              </button>
            </div>
          </div>

          {/* Right: Player Stats & Quick Registration Card */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            <div className="bg-[#141226] border border-white/5 rounded-3xl p-6 shadow-xl flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#f751a1]/20 text-[#f751a1] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[24px]">workspace_premium</span>
                </div>
                <div className="flex flex-col text-left">
                  <h4 className="text-lg font-bold text-white">Rozet & Puan Sistemi</h4>
                  <span className="text-xs text-[#64748b]">Ücretsiz hesabınla sıralamada yer al</span>
                </div>
              </div>

              {/* Inline SVG Infographic / Accuracy Donut */}
              <div className="p-4 rounded-2xl bg-[#1f1e2f] border border-white/5 flex items-center justify-between">
                <div className="flex flex-col text-left">
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#64748b]">
                    ORTALAMA İSABET
                  </span>
                  <span className="text-3xl font-black text-white">78.4%</span>
                  <span className="text-xs text-[#4cd7f6] mt-0.5">Genel Topluluk Skoru</span>
                </div>
                <svg className="w-20 h-20 -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-[#141226]"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3.5"
                  />
                  <path
                    className="text-[#f751a1]"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeDasharray="78, 100"
                    strokeLinecap="round"
                    strokeWidth="3.5"
                  />
                </svg>
              </div>

              <p className="text-xs text-[#94a3b8] leading-relaxed text-left">
                Tek başına oynamak için üyelik zorunlu değildir. Ancak 1v1 düellolarda ve genel lider tablosunda kalıcı
                rozetler kazanmak için ücretsiz kaydolabilirsin.
              </p>

              <button
                onClick={onOpenAuth}
                className="w-full py-3 rounded-xl bg-[#29283a] hover:bg-[#39374a] text-white text-xs font-bold text-center transition-all cursor-pointer"
              >
                Hemen Kayıt Ol / Giriş Yap
              </button>
            </div>

            {/* Fast Matchmaking Live Ping */}
            <div className="bg-[#141226] border border-white/5 rounded-3xl p-5 shadow-xl flex items-center justify-between">
              <div className="flex items-center gap-3 text-left">
                <span className="w-3 h-3 rounded-full bg-[#4cd7f6] animate-ping"></span>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-white">1v1 Canlı Eşleşme</span>
                  <span className="text-xs text-[#64748b]">Ortalama bekleme: 2 sn</span>
                </div>
              </div>
              <button
                onClick={onStartDuel}
                className="px-5 py-2.5 rounded-xl bg-[#4cd7f6]/15 hover:bg-[#4cd7f6]/25 text-[#4cd7f6] font-bold text-xs transition-all border border-[#4cd7f6]/30 hover:scale-105 active:scale-95 cursor-pointer"
              >
                Eşleş
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
