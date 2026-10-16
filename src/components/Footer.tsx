import React from 'react';
import { Share2, MessageSquare, Video } from 'lucide-react';

interface FooterProps {
  onStartQuiz: () => void;
  onStartDuel: () => void;
  onOpenEncyclopedia: () => void;
  onOpenSuggest: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onStartQuiz,
  onStartDuel,
  onOpenEncyclopedia,
  onOpenSuggest
}) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#0d0c1d] border-t border-white/5 mt-16 text-left">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Col */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img
                src="https://lh3.googleusercontent.com/aida/AEtjO1XG_pKST0Cu9kdbEhdG4WGFtwvFw5GsmBXFuLAs363XvNwXf_lNuy9HV1HeV64Mn34y9n0DfUslaZBgt2gRsSKpFNKrK3xt0JPrx9ZiVO8Or1LhCcw8u4hlQjVRrDcf3K1Q_EXGVvMkrOvv3On_a2ALB8frbtMxtuN3hrwsdthnJawVtjECtK6FeEyCVe1zvRYSPCKp8Z3tEpM1-Ohh5X_Z9gMf5qKjeNJ0seQAaq51z8eEwD-x0p0Jig"
                alt="Meme Yarışması Logo"
                className="h-9 w-9 object-contain"
              />
              <span className="text-2xl font-black text-white">Meme Yarışması</span>
            </div>
            <p className="text-sm text-[#94a3b8] max-w-sm leading-relaxed">
              Türk internet kültürünün efsaneleşmiş replikleri, unutulmaz caps'leri ve viral memeleri üzerine kurulu
              eğlenceli sosyal trivia arenası.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: 'Meme Yarışması',
                      text: 'Türk internet meme bilgisini sına!',
                      url: window.location.href
                    });
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                    alert('Bağlantı kopyalandı!');
                  }
                }}
                className="w-10 h-10 rounded-xl bg-[#141226] border border-white/5 flex items-center justify-center text-[#94a3b8] hover:text-[#f751a1] hover:bg-[#1f1e2f] transition-all cursor-pointer"
                title="Paylaş"
              >
                <Share2 size={18} />
              </button>
              <button
                onClick={onOpenSuggest}
                className="w-10 h-10 rounded-xl bg-[#141226] border border-white/5 flex items-center justify-center text-[#94a3b8] hover:text-[#4cd7f6] hover:bg-[#1f1e2f] transition-all cursor-pointer"
                title="Yorum & Öneri"
              >
                <MessageSquare size={18} />
              </button>
              <button
                onClick={onStartQuiz}
                className="w-10 h-10 rounded-xl bg-[#141226] border border-white/5 flex items-center justify-center text-[#94a3b8] hover:text-[#ffb95f] hover:bg-[#1f1e2f] transition-all cursor-pointer"
                title="Klip İzle"
              >
                <Video size={18} />
              </button>
            </div>
          </div>

          {/* Col 2: Oyun Modları */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-black text-white uppercase tracking-wider">Oyun Modları</span>
            <button
              onClick={onStartQuiz}
              className="text-sm text-[#94a3b8] hover:text-white transition-colors text-left"
            >
              Klasik Maraton
            </button>
            <button
              onClick={onStartDuel}
              className="text-sm text-[#94a3b8] hover:text-[#4cd7f6] transition-colors text-left flex items-center gap-1.5"
            >
              <span>1v1 Canlı Düello</span>
              <span className="text-[10px] bg-[#4cd7f6]/20 text-[#4cd7f6] px-1 rounded font-bold">Popüler</span>
            </button>
            <button
              onClick={onStartDuel}
              className="text-sm text-[#94a3b8] hover:text-white transition-colors text-left"
            >
              Oda Kur & Yarış
            </button>
            <button
              onClick={() => scrollTo('liderlik-bolumu')}
              className="text-sm text-[#94a3b8] hover:text-white transition-colors text-left"
            >
              Günün Memesi
            </button>
          </div>

          {/* Col 3: Keşfet */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-black text-white uppercase tracking-wider">Keşfet</span>
            <button
              onClick={onOpenEncyclopedia}
              className="text-sm text-[#94a3b8] hover:text-white transition-colors text-left"
            >
              Meme Ansiklopedisi
            </button>
            <button
              onClick={() => scrollTo('liderlik-bolumu')}
              className="text-sm text-[#94a3b8] hover:text-white transition-colors text-left"
            >
              Haftalık Şampiyonlar
            </button>
            <button
              onClick={() => scrollTo('blog-bolumu')}
              className="text-sm text-[#94a3b8] hover:text-white transition-colors text-left"
            >
              Kültür Yazıları
            </button>
            <button
              onClick={onOpenSuggest}
              className="text-sm text-[#94a3b8] hover:text-[#f751a1] transition-colors text-left font-bold"
            >
              Meme Gönder / Katkı Yap
            </button>
          </div>

          {/* Col 4: Yasal & Bilgi */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-black text-white uppercase tracking-wider">Yasal & Kurumsal</span>
            <button
              onClick={() => scrollTo('sss-bolumu')}
              className="text-sm text-[#94a3b8] hover:text-white transition-colors text-left"
            >
              Kullanım Koşulları
            </button>
            <button
              onClick={() => scrollTo('sss-bolumu')}
              className="text-sm text-[#94a3b8] hover:text-white transition-colors text-left"
            >
              Gizlilik Politikası
            </button>
            <button
              onClick={() => scrollTo('sss-bolumu')}
              className="text-sm text-[#94a3b8] hover:text-white transition-colors text-left"
            >
              Sıkça Sorulan Sorular
            </button>
            <button
              onClick={() => scrollTo('sss-bolumu')}
              className="text-sm text-[#94a3b8] hover:text-white transition-colors text-left"
            >
              İletişim & Künye
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#64748b]">
            © {new Date().getFullYear()} Meme Yarışması. Tüm hakları saklıdır.
          </p>
          <p className="text-xs text-[#64748b] flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4cd7f6]"></span>
            Türk internet mizahına sevgiyle geliştirildi.
          </p>
        </div>
      </div>
    </footer>
  );
};
