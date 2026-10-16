import React from 'react';

export const HowToPlaySection: React.FC = () => {
  return (
    <section className="w-full px-4 sm:px-6 py-16" id="nasil-oynanir">
      <div className="max-w-5xl mx-auto flex flex-col gap-8 text-center">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-black text-[#f751a1] uppercase tracking-widest">
            BASİT VE BAĞIMLILIK YAPICI
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white">Nasıl Oynanır?</h2>
          <p className="text-sm sm:text-base text-[#94a3b8] max-w-lg">
            Karmaşık kurallar veya bekleme odaları yok. Hemen başla ve 3 adımda meme ustası olduğunu kanıtla.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
          {/* Step 1 */}
          <div className="bg-[#141226] border border-white/5 rounded-3xl p-7 flex flex-col items-center text-center gap-3 hover:border-[#4cd7f6]/40 transition-all shadow-lg">
            <div className="w-14 h-14 rounded-2xl bg-[#4cd7f6]/15 text-[#4cd7f6] flex items-center justify-center font-bold text-xl">
              <span className="material-symbols-outlined text-[32px]">play_circle</span>
            </div>
            <span className="px-3 py-1 rounded-full bg-[#4cd7f6]/10 text-[#4cd7f6] text-[11px] font-black uppercase">
              1. ADIM
            </span>
            <h3 className="text-xl font-bold text-white">Videoyu & Repliği İzle</h3>
            <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
              Efsane Türk dizisi, sokak röportajı veya canlı yayın klibini incele ve meşhur sahneyi hatırla.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-[#141226] border border-white/5 rounded-3xl p-7 flex flex-col items-center text-center gap-3 hover:border-[#f751a1]/40 transition-all shadow-lg">
            <div className="w-14 h-14 rounded-2xl bg-[#f751a1]/20 text-[#f751a1] flex items-center justify-center font-bold text-xl">
              <span className="material-symbols-outlined text-[32px]">touch_app</span>
            </div>
            <span className="px-3 py-1 rounded-full bg-[#f751a1]/20 text-[#ffb0cd] text-[11px] font-black uppercase">
              2. ADIM
            </span>
            <h3 className="text-xl font-bold text-white">4 Şıktan Doğrusunu Seç</h3>
            <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
              Süre tükenmeden en doğru repliği seç. Hızlı cevap vererek seri (streak) ve bonus puanlar topla!
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-[#141226] border border-white/5 rounded-3xl p-7 flex flex-col items-center text-center gap-3 hover:border-[#10b981]/40 transition-all shadow-lg">
            <div className="w-14 h-14 rounded-2xl bg-[#10b981]/15 text-[#10b981] flex items-center justify-center font-bold text-xl">
              <span className="material-symbols-outlined text-[32px]">workspace_premium</span>
            </div>
            <span className="px-3 py-1 rounded-full bg-[#10b981]/10 text-[#10b981] text-[11px] font-black uppercase">
              3. ADIM
            </span>
            <h3 className="text-xl font-bold text-white">En Yüksek Skoru Topla</h3>
            <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
              10 soruluk testi tamamla, Meme Profesörü unvanını kazan ve lider tablosunda arkadaşlarına fark at!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
