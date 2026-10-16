import React, { useState } from 'react';
import { X, Sparkles, Send } from 'lucide-react';

interface MemeSuggestModalProps {
  onClose: () => void;
}

export const MemeSuggestModal: React.FC<MemeSuggestModalProps> = ({ onClose }) => {
  const [memeTitle, setMemeTitle] = useState('');
  const [quote, setQuote] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!memeTitle.trim() || !quote.trim()) return;
    setSubmitted(true);
    setTimeout(() => {
      onClose();
    }, 2200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150">
      <div className="bg-[#141226] border border-white/10 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative text-left">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-[#1f1e2f] text-[#94a3b8] hover:text-white transition-all cursor-pointer"
        >
          <X size={18} />
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-[#ffb95f]">
              <Sparkles size={22} />
              <h3 className="text-2xl font-black text-white">Meme Öner</h3>
            </div>
            <p className="text-xs sm:text-sm text-[#94a3b8]">
              Gözden kaçırdığımız efsane bir Türk repliği mi var? Soru havuzumuza ekle, onaylanınca adınla yayınlayalım!
            </p>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-white uppercase tracking-wider">
                Meme Başlığı / Sahne Adı
              </label>
              <input
                type="text"
                required
                placeholder="Örn: Taksim Dayı / Hello Hello"
                value={memeTitle}
                onChange={(e) => setMemeTitle(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-[#1f1e2f] border border-white/10 text-white text-sm focus:outline-none focus:border-[#ffb95f] transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-white uppercase tracking-wider">
                Meşhur Kült Replik
              </label>
              <textarea
                required
                rows={2}
                placeholder="Örn: 'Are you disco? Are you big kola?'"
                value={quote}
                onChange={(e) => setQuote(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-[#1f1e2f] border border-white/10 text-white text-sm focus:outline-none focus:border-[#ffb95f] transition-colors resize-none"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-white uppercase tracking-wider">
                Video / Klip Linki (Opsiyonel)
              </label>
              <input
                type="url"
                placeholder="https://youtube.com/... veya TikTok"
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-[#1f1e2f] border border-white/10 text-white text-sm focus:outline-none focus:border-[#ffb95f] transition-colors"
              />
            </div>

            <button
              type="submit"
              className="mt-2 w-full py-3 rounded-xl bg-gradient-to-r from-[#ffb95f] to-[#ca8100] text-black font-black text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,185,95,0.4)] hover:brightness-110 active:scale-95 transition-all cursor-pointer"
            >
              <Send size={16} />
              <span>Öneriyi Gönder</span>
            </button>
          </form>
        ) : (
          <div className="py-8 flex flex-col items-center gap-3 text-center">
            <div className="w-16 h-16 rounded-full bg-[#10b981]/20 text-[#10b981] flex items-center justify-center">
              <span className="material-symbols-outlined text-[36px]">check_circle</span>
            </div>
            <h4 className="text-xl font-black text-white">Önerin Alındı!</h4>
            <p className="text-xs text-[#94a3b8]">
              Editörlerimiz memeyi inceleyip yarışma soru setine ekleyecek. Teşekkürler!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
