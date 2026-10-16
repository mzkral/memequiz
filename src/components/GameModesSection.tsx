import React from 'react';

interface GameModesSectionProps {
  onSelectMode: (mode: 'classic' | 'speed' | 'endless' | 'hardcore' | 'duel' | 'group') => void;
}

export const GameModesSection: React.FC<GameModesSectionProps> = ({ onSelectMode }) => {
  return (
    <section className="w-full px-4 sm:px-6 py-16 sm:py-20" id="oyun-modlari">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-black text-[#f751a1] uppercase tracking-widest">
              REKABET DOLU ARENALAR
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#f8fafc] tracking-tight mt-1">
              Meme Yarışması Oyun Modları
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#94a3b8] max-w-md">
            İster tek başına zamana karşı reflekslerini sına, ister odana arkadaşlarını toplayıp en bilgiliyi ortaya çıkar.
          </p>
        </div>

        {/* Bento Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Mode 1: Klasik Mod */}
          <div
            onClick={() => onSelectMode('classic')}
            className="bg-[#141226] border border-white/5 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-lg relative overflow-hidden group hover:bg-[#1f1e2f] hover:border-[#4cd7f6]/30 transition-all cursor-pointer"
          >
            <div className="flex flex-col gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#4cd7f6]/15 text-[#4cd7f6] flex items-center justify-center">
                <span className="material-symbols-outlined text-[28px]">pace</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Klasik Mod</h3>
              <p className="text-sm text-[#94a3b8] leading-relaxed">
                Standart tur; kendi hızında, süre baskısı olmadan rahatça cevap verirsin. Dizilerden, sokak
                röportajlarından gelen unutulmaz sahnelerin tadını çıkar.
              </p>
            </div>
            <div className="pt-6 flex items-center justify-between border-t border-white/5 mt-4">
              <span className="text-xs text-[#64748b]">Zaman sınırı yok</span>
              <span className="text-sm font-bold text-[#4cd7f6] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Başla <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </span>
            </div>
          </div>

          {/* Mode 2: Hız Modu (Featured) */}
          <div
            onClick={() => onSelectMode('speed')}
            className="bg-gradient-to-br from-[#141226] via-[#1f1e2f] to-[#141226] border border-[#f751a1]/40 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-[0_0_30px_rgba(247,81,161,0.15)] relative overflow-hidden group hover:border-[#f751a1] transition-all cursor-pointer"
          >
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#f751a1] text-white text-[11px] font-black uppercase tracking-wider shadow-[0_0_15px_rgba(247,81,161,0.5)]">
              EN POPÜLER
            </div>
            <div className="flex flex-col gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#f751a1]/20 text-[#f751a1] flex items-center justify-center">
                <span className="material-symbols-outlined text-[28px]">timer</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Hız Modu</h3>
              <p className="text-sm text-[#94a3b8] leading-relaxed">
                Her soru için yalnızca 10 saniyen var! Replikleri saniyesinde hatırla, komboyu bozmadan en yüksek skora
                ulaş.
              </p>
            </div>
            <div className="pt-6 flex items-center justify-between border-t border-white/5 mt-4">
              <span className="text-xs font-bold text-[#f751a1]">10 Saniye / Soru</span>
              <span className="text-sm font-bold text-[#f751a1] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Hemen Dene <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </span>
            </div>
          </div>

          {/* Mode 3: Sonsuz Mod */}
          <div
            onClick={() => onSelectMode('endless')}
            className="bg-[#141226] border border-white/5 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-lg relative overflow-hidden group hover:bg-[#1f1e2f] hover:border-[#a855f7]/30 transition-all cursor-pointer"
          >
            <div className="flex flex-col gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#a855f7]/15 text-[#a855f7] flex items-center justify-center">
                <span className="material-symbols-outlined text-[28px]">all_inclusive</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Sonsuz Mod</h3>
              <p className="text-sm text-[#94a3b8] leading-relaxed">
                Sorular bitene kadar akmaya devam eder. Aralıksız Türk internet mizah maratonu. Ne kadar ileri gidebileceğini
                kanıtla.
              </p>
            </div>
            <div className="pt-6 flex items-center justify-between border-t border-white/5 mt-4">
              <span className="text-xs text-[#64748b]">Tüm Arşiv Açık</span>
              <span className="text-sm font-bold text-[#a855f7] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Meydan Oku <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </span>
            </div>
          </div>

          {/* Mode 4: Hardcore Mod (3 Can) */}
          <div
            onClick={() => onSelectMode('hardcore')}
            className="bg-[#141226] border border-white/5 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-lg relative overflow-hidden group hover:bg-[#1f1e2f] hover:border-[#ef4444]/30 transition-all cursor-pointer"
          >
            <div className="flex flex-col gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#ef4444]/15 text-[#ef4444] flex items-center justify-center">
                <span className="material-symbols-outlined text-[28px]">heart_broken</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Hardcore Mod</h3>
              <p className="text-sm text-[#94a3b8] leading-relaxed">
                Yalnızca 3 canın var; 3. yanlışta oyun biter. Sıfır tolerans, saf bilgi. Meme ustalığını elit lige taşımak
                isteyenlere özel.
              </p>
            </div>
            <div className="pt-6 flex items-center justify-between border-t border-white/5 mt-4">
              <span className="text-xs font-bold text-[#ef4444]">3 Yanlış = Game Over</span>
              <span className="text-sm font-bold text-[#ef4444] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Cesaret Et <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </span>
            </div>
          </div>

          {/* Mode 5: 1v1 Düello & Grup Odası */}
          <div
            onClick={() => onSelectMode('duel')}
            className="bg-[#141226] border border-white/5 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-lg relative overflow-hidden group hover:bg-[#1f1e2f] hover:border-[#10b981]/30 transition-all cursor-pointer"
          >
            <div className="flex flex-col gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#10b981]/15 text-[#10b981] flex items-center justify-center">
                <span className="material-symbols-outlined text-[28px]">group_add</span>
              </div>
              <h3 className="text-2xl font-bold text-white">1v1 Düello & Grup Odası</h3>
              <p className="text-sm text-[#94a3b8] leading-relaxed">
                Tek tıkla davet linkini kopyala, 5 kişiye kadar aynı odada canlı yarış. Kim daha hızlı, kim daha doğru?
                Skorları anında karşılaştır.
              </p>
            </div>
            <div className="pt-6 flex items-center justify-between border-t border-white/5 mt-4">
              <span className="text-xs font-bold text-[#10b981]">Canlı Çok Oyunculu</span>
              <span className="text-sm font-bold text-[#10b981] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Oda Kur <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </span>
            </div>
          </div>

          {/* Mode 6: Joker Sistemi */}
          <div
            onClick={() => onSelectMode('classic')}
            className="bg-[#141226] border border-white/5 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-lg relative overflow-hidden group hover:bg-[#1f1e2f] hover:border-[#ffb95f]/30 transition-all cursor-pointer"
          >
            <div className="flex flex-col gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#ffb95f]/15 text-[#ffb95f] flex items-center justify-center">
                <span className="material-symbols-outlined text-[28px]">extension</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Joker Sistemi</h3>
              <p className="text-sm text-[#94a3b8] leading-relaxed">
                Oyun başına iki kez <strong>50:50</strong> (iki yanlış şıkkı siler) ve bir kez <strong>Pas Geç</strong>{' '}
                kullanarak serini koru ve lider tablosuna adını yazdır.
              </p>
            </div>
            <div className="pt-6 flex items-center justify-between border-t border-white/5 mt-4">
              <span className="text-xs font-bold text-[#ffb95f]">2x 50:50 + 1x Pas</span>
              <span className="text-sm font-bold text-[#ffb95f] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Dene <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
