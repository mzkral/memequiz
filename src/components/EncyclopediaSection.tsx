import React, { useState } from 'react';
import { MEME_ENCYCLOPEDIA, MemeArchiveItem } from '../data/encyclopediaData';
import { X, Sparkles, Volume2 } from 'lucide-react';
import { sounds } from '../utils/audio';

interface EncyclopediaSectionProps {
  onPlayMemeQuiz: (memeTitle: string) => void;
}

export const EncyclopediaSection: React.FC<EncyclopediaSectionProps> = ({ onPlayMemeQuiz }) => {
  const [selectedMeme, setSelectedMeme] = useState<MemeArchiveItem | null>(null);
  const [searchFilter, setSearchFilter] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Sokak Röportajı', 'Canlı Yayın', 'TV / Röportaj', 'Amatör Video', 'Sosyal Medya'];

  const filteredMemes = MEME_ENCYCLOPEDIA.filter((meme) => {
    const matchesCategory = selectedCategory === 'All' || meme.category === selectedCategory;
    const matchesSearch =
      meme.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
      meme.description.toLowerCase().includes(searchFilter.toLowerCase()) ||
      meme.origin.toLowerCase().includes(searchFilter.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getBadgeClasses = (type: MemeArchiveItem['badgeType']) => {
    switch (type) {
      case 'pink':
        return 'text-[#f751a1] bg-[#f751a1]/15';
      case 'cyan':
        return 'text-[#4cd7f6] bg-[#4cd7f6]/15';
      case 'amber':
        return 'text-[#ffb95f] bg-[#ffb95f]/15';
      case 'emerald':
        return 'text-[#10b981] bg-[#10b981]/15';
      case 'purple':
        return 'text-[#a855f7] bg-[#a855f7]/15';
    }
  };

  return (
    <section className="w-full px-4 sm:px-6 py-16 sm:py-20" id="ansiklopedi-bolumu">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        {/* Section Title & Narrative */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-black text-[#a855f7] uppercase tracking-widest">KÜLTÜR ARŞİVİ</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#f8fafc] tracking-tight mt-1">
              Meme Ansiklopedisi: Kült Replikler
            </h2>
          </div>
          <button
            onClick={() => {
              setSearchFilter('');
              setSelectedCategory('All');
            }}
            className="text-sm font-bold text-[#a855f7] flex items-center gap-1 hover:underline cursor-pointer"
          >
            Tüm Memeleri Keşfet (88+) →
          </button>
        </div>

        <p className="text-base sm:text-lg text-[#94a3b8] max-w-3xl leading-relaxed text-left">
          Yarışmadaki her memenin ne anlama geldiğini, nereden çıktığını ve hangi durumda kullanıldığını keşfet.
          "Kurabiye var simit var neye bakıyon" Kuzey Güney'den, "Sayın Bezmenler kapıyı açar mısınız" Uğur Dündar'dan,
          "Ankara ayağını denk alsın" Sarı Mikrofon röportajından gelir.
        </p>

        {/* Category Pills & Filter */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#a855f7] text-white shadow-[0_0_15px_rgba(168,85,247,0.4)]'
                  : 'bg-[#141226] text-[#94a3b8] hover:text-white border border-white/5'
              }`}
            >
              {cat === 'All' ? 'Tümü' : cat}
            </button>
          ))}
        </div>

        {/* 8+ Meme Showcase Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {filteredMemes.map((item) => {
            const badgeClass = getBadgeClasses(item.badgeType);
            return (
              <div
                key={item.id}
                onClick={() => {
                  setSelectedMeme(item);
                  sounds.playClick();
                }}
                className="bg-[#141226] border border-white/5 rounded-3xl p-5 flex flex-col justify-between shadow-md hover:bg-[#1f1e2f] hover:border-white/10 hover:-translate-y-1 transition-all group cursor-pointer text-left"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className={`px-2.5 py-0.5 rounded-lg text-xs font-extrabold ${badgeClass}`}>
                      {item.number}
                    </span>
                    <span className="text-xs text-[#64748b]">{item.category}</span>
                  </div>
                  <h4 className="text-xl font-bold text-white group-hover:text-[#ffb0cd] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#94a3b8] line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-white/5 flex items-center justify-between text-xs text-[#64748b]">
                  <span>Köken: {item.origin}</span>
                  <span className="material-symbols-outlined text-[18px] group-hover:text-white transition-colors">
                    arrow_forward
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Selected Meme Story Modal */}
      {selectedMeme && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150">
          <div className="bg-[#141226] border border-white/10 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative flex flex-col gap-5 text-left">
            <button
              onClick={() => setSelectedMeme(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-[#1f1e2f] text-[#94a3b8] hover:text-white transition-all cursor-pointer"
            >
              <X size={18} />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-2.5">
              <span className="px-3 py-1 rounded-xl text-xs font-black bg-[#a855f7]/20 text-[#a855f7]">
                {selectedMeme.number}
              </span>
              <span className="text-xs font-semibold text-[#94a3b8]">
                {selectedMeme.category} · {selectedMeme.year}
              </span>
            </div>

            <div>
              <h3 className="text-2xl font-black text-white">{selectedMeme.title}</h3>
              <span className="text-xs text-[#64748b] block mt-1">Köken: {selectedMeme.origin}</span>
            </div>

            {/* Famous Quote Box */}
            <div className="p-4 rounded-2xl bg-[#1f1e2f] border border-white/5 flex items-start gap-3">
              <Volume2 className="text-[#f751a1] shrink-0 mt-0.5" size={20} />
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#64748b]">
                  MEŞHUR REPLİK
                </span>
                <p className="text-base font-bold text-white italic mt-0.5">"{selectedMeme.quote}"</p>
              </div>
            </div>

            {/* In-depth Backstory */}
            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-bold text-[#94a3b8] uppercase tracking-wider">
                HİKAYESİ VE KÜLTÜREL ETKİSİ
              </span>
              <p className="text-sm text-[#cbd5e1] leading-relaxed">{selectedMeme.longStory}</p>
            </div>

            <div className="flex items-center justify-between text-xs text-[#64748b] pt-2 border-t border-white/5">
              <span className="flex items-center gap-1">
                <Sparkles size={14} className="text-[#ffb95f]" />
                {selectedMeme.viewsEstimate}
              </span>
              <button
                onClick={() => {
                  setSelectedMeme(null);
                  onPlayMemeQuiz(selectedMeme.title);
                }}
                className="px-4 py-2 rounded-xl bg-[#f751a1] hover:bg-[#b4136d] text-white font-bold text-xs shadow-[0_0_15px_rgba(247,81,161,0.4)] transition-all cursor-pointer"
              >
                Bu Replikle Quizi Başlat
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
