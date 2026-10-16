import React from 'react';

interface QuickNavTilesProps {
  onStartDaily: () => void;
  onOpenCreate: () => void;
  onOpenEncyclopedia: () => void;
  onOpenSuggest: () => void;
  onOpenLeaderboard: () => void;
  onOpenBlog: () => void;
}

export const QuickNavTiles: React.FC<QuickNavTilesProps> = ({
  onStartDaily,
  onOpenCreate,
  onOpenEncyclopedia,
  onOpenSuggest,
  onOpenLeaderboard,
  onOpenBlog
}) => {
  return (
    <section className="w-full px-4 sm:px-6 -mt-6 sm:-mt-8 relative z-20">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {/* Tile 1: Günlük Mücadele */}
        <button
          onClick={onStartDaily}
          className="bg-[#141226] border border-white/5 hover:border-[#f751a1]/40 hover:bg-[#1f1e2f] rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center gap-2 text-center transition-all hover:-translate-y-1 shadow-md group cursor-pointer"
        >
          <div className="w-12 h-12 rounded-xl bg-[#f751a1]/15 text-[#f751a1] flex items-center justify-center group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-[26px]">target</span>
          </div>
          <span className="text-sm font-bold text-white">Günlük Mücadele</span>
          <span className="text-xs text-[#64748b]">10 Yeni Soru</span>
        </button>

        {/* Tile 2: Meme Oluştur */}
        <button
          onClick={onOpenCreate}
          className="bg-[#141226] border border-white/5 hover:border-[#4cd7f6]/40 hover:bg-[#1f1e2f] rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center gap-2 text-center transition-all hover:-translate-y-1 shadow-md group cursor-pointer"
        >
          <div className="w-12 h-12 rounded-xl bg-[#4cd7f6]/15 text-[#4cd7f6] flex items-center justify-center group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-[26px]">videocam</span>
          </div>
          <span className="text-sm font-bold text-white">Meme Oluştur</span>
          <span className="text-xs text-[#64748b]">Kendi Klibini Ekle</span>
        </button>

        {/* Tile 3: Ansiklopedi */}
        <button
          onClick={onOpenEncyclopedia}
          className="bg-[#141226] border border-white/5 hover:border-[#a855f7]/40 hover:bg-[#1f1e2f] rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center gap-2 text-center transition-all hover:-translate-y-1 shadow-md group cursor-pointer"
        >
          <div className="w-12 h-12 rounded-xl bg-[#a855f7]/15 text-[#a855f7] flex items-center justify-center group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-[26px]">menu_book</span>
          </div>
          <span className="text-sm font-bold text-white">Ansiklopedi</span>
          <span className="text-xs text-[#64748b]">88+ Viral Arşiv</span>
        </button>

        {/* Tile 4: Meme Öner */}
        <button
          onClick={onOpenSuggest}
          className="bg-[#141226] border border-white/5 hover:border-[#ffb95f]/40 hover:bg-[#1f1e2f] rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center gap-2 text-center transition-all hover:-translate-y-1 shadow-md group cursor-pointer"
        >
          <div className="w-12 h-12 rounded-xl bg-[#ffb95f]/15 text-[#ffb95f] flex items-center justify-center group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-[26px]">auto_awesome</span>
          </div>
          <span className="text-sm font-bold text-white">Meme Öner</span>
          <span className="text-xs text-[#64748b]">Soruları Sen Belirle</span>
        </button>

        {/* Tile 5: Lider Tablosu */}
        <button
          onClick={onOpenLeaderboard}
          className="bg-[#141226] border border-white/5 hover:border-[#10b981]/40 hover:bg-[#1f1e2f] rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center gap-2 text-center transition-all hover:-translate-y-1 shadow-md group cursor-pointer"
        >
          <div className="w-12 h-12 rounded-xl bg-[#10b981]/15 text-[#10b981] flex items-center justify-center group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-[26px]">emoji_events</span>
          </div>
          <span className="text-sm font-bold text-white">Lider Tablosu</span>
          <span className="text-xs text-[#64748b]">Haftalık Şampiyonlar</span>
        </button>

        {/* Tile 6: Blog & Analiz */}
        <button
          onClick={onOpenBlog}
          className="bg-[#141226] border border-white/5 hover:border-[#f751a1]/40 hover:bg-[#1f1e2f] rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center gap-2 text-center transition-all hover:-translate-y-1 shadow-md group cursor-pointer"
        >
          <div className="w-12 h-12 rounded-xl bg-[#f751a1]/15 text-[#f751a1] flex items-center justify-center group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-[26px]">newspaper</span>
          </div>
          <span className="text-sm font-bold text-white">Blog & Analiz</span>
          <span className="text-xs text-[#64748b]">Kültür Yazıları</span>
        </button>
      </div>
    </section>
  );
};
